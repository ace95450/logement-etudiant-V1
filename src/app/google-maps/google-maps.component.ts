import {Component, OnInit} from '@angular/core';
import { GeoService } from '../services/geolocalisation/geo.service';
import { GeoJson, FeatureCollection } from '../map';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit{
  /// default settings
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v9';
  lat = 49.53;
  lng = 2.38;
  message = 'Hello World!';

  //data
  source: any;
  markers: any;

  constructor(private mapService: GeoService) {}

  ngOnInit() {
    this.initializeMap();
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
      const newMarker   = new GeoJson(coordinates, { message: this.message });
      this.mapService.createMarker(newMarker);
    });


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
