import { Component, OnInit } from '@angular/core';
import { GeoService } from '../../services/geolocalisation/geo.service';
import { GeoJson, FeatureCollection } from '../../map';
import { ActivatedRoute, Router } from '@angular/router';
import { ImmoService } from '../../services/immo/immo.service';
import * as mapboxgl from 'mapbox-gl';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import {ActionSheetController, ModalController, NavController, ToastController} from '@ionic/angular';
import { ImagePage } from '../../image/image.page';

@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class DetailsItemComponent implements OnInit {

  immo: any;
  immoID: any = this.route.snapshot.paramMap.get('id');
  immoSegment: string = 'details';

  /// default settings
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 49.53;
  lng = 2.38;
  message = 'Hello World!';

  //data
  source: any;
  markers: any;

  constructor(private mapService: GeoService,
              public navCtrl: NavController,
              public asCtrl: ActionSheetController,
              public toastCtrl: ToastController,
              public modalCtrl: ModalController,
              public immos: ImmoService,
              public route: ActivatedRoute,
              public router: Router) {
    this.immo = this.immos.getItem(this.immoID);
  }

  ngOnInit() {
    this.initializeMap();
    console.log(this.immo);
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async favorite(hotel) {

    this.immos.favorite(hotel)
        .then(async property => {
          const toast = await this.toastCtrl.create({
            showCloseButton: true,
            message: 'Le bien à été ajouté à vos favoris',
            duration: 950,
            position: 'bottom'
          });

          toast.present();
        });
  }

  async share() {
    const actionSheet = await this.asCtrl.create({
      header: 'Partager:',
      buttons: [{
        text: 'Facebook',
        role: 'facebook',
        icon: 'logo-facebook',
        handler: () => {
          console.log('Facebook clicked');
        }
      }, {
        text: 'Twitter',
        icon: 'logo-twitter',
        handler: () => {
          console.log('Twitter clicked');
        }
      }, {
        text: 'Google+',
        icon: 'logo-googleplus',
        handler: () => {
          console.log('Google+ clicked');
        }
      }, {
        text: 'Instagram',
        icon: 'logo-instagram',
        handler: () => {
          console.log('Instagram clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  range(n) {
    return new Array(n);
  }

  avgRating() {
    let average: number = 0;

    this.immo.reviews.forEach((val: any, key: any) => {
      average += val.rating;
    });

    return average / this.immo.reviews.length;
  }



  private initializeMap() {
    //Situé l'utilisateur
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lat, this.lng]
        });
      });

    }

    this.buildMap();

  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 5,
      center: [this.lat, this.lng]
    });

    /// Add map controls
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));


    //// Add Marker on Click
    this.map.on('click', (event) => {
      const coordinates = [event.lngLat.lng, event.lngLat.lat]
      const newMarker = new GeoJson(coordinates, {message: this.message});
      this.mapService.createMarker(newMarker);
    })


    /// Add realtime firebase data on map load
    this.map.on('load', (event) => {

      /// register source
      this.map.addSource('firebase', {
        type: 'GeoJson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      /// get source
      this.source = this.map.getSource('firebase');

      /// subscribe to realtime database and set data source
      this.markers.subscribe(markers => {
        const data = new FeatureCollection(markers);
        this.source.setData(data);
      });

      /// create map layers with realtime data
      this.map.addLayer({
        id: 'firebase',
        source: 'firebase',
        type: 'symbol',
        layout: {
          'text-field': '{message}',
          'text-size': 24,
          'text-transform': 'uppercase',
          'icon-image': 'rocket-15',
          'text-offset': [0, 1.5]
        },
        paint: {
          'text-color': '#f16624',
          'text-halo-color': '#fff',
          'text-halo-width': 2
        }
      });

    });
  }

  /// Helpers

  removeMarker(marker) {
    this.mapService.removeMarker(marker.$key);
  }

  flyTo(data: GeoJson) {
    this.map.flyTo({
      center: data.geometry.coordinates
    });
  }


}
