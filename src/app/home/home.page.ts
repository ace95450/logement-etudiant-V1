import {Component, OnInit} from '@angular/core';
import { ImmoService } from '../services/immo/immo.service';
import {LoadingController, MenuController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  openMenu: Boolean = false;
  searchQuery: String = '';
  items: string[];
  showItems: Boolean = false;
  rooms: any;
  adults: any;
  childs: any = 0;
  children: number;
  immolocation: string;

  constructor(public immos: ImmoService,
              public navCtrl: NavController,
              public menuCtrl: MenuController,
              public loadingCtrl: LoadingController) {
    this.immos = immos.getAll();
  }

  ngOnInit() {  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  initializeItems() {
    this.items = [
        'Le Grand Paris - Paris',
        'Le Petit Paris - Paris'
    ];
  }

  itemSelected(item: string) {
    this.immolocation = item;
    this.showItems = false;
  }

  childrenArr(chil) {
    const child = Number(chil);
    this.childs = Array(child).fill(0).map((v, i) => i);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.showItems = true;
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.showItems = false;
    }
  }

  async viewHotels() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateForward('details-item');
    });
  }


}
