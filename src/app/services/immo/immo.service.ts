import { Injectable } from '@angular/core';
import { IMMO } from './mock-immo';

@Injectable({
  providedIn: 'root'
})
export class ImmoService {
  immos: any;
  favoriteCounter: number = 0;
  favorites: Array<any> = [];
  bookingCounter: number = 0;
  bookings: Array<any> = [];

  constructor() {
    this.immos = IMMO;
  }

  // Récupère toute les donné de la BDD JSON
  getAll() {
    return this.immos;
  }

  // Récupère l'ID du bien sélectionné
  getItem(id) {
    for (var i = 0; i < this.immos.length; i++) {
      if (this.immos[i].id === parseInt(id)) {
        return this.immos[i];
      }
    }
    return null;
  }


  // Supprime le bien
  remove(item) {
    this.immos.splice(this.immos.indexOf(item), 1);
  }

  /////
  //For Search and Favorites
  ////
  findAll() {
    return Promise.resolve(this.immos);
  }

  findById(id) {
    return Promise.resolve(this.immos[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(this.immos.filter((property: any) =>
        (property.title + ' ' + property.address + ' ' + property.city + ' ' + property.description).toUpperCase().indexOf(key) > -1));
  }

  getFavorites() {
    return Promise.resolve(this.favorites);
  }

  getBookings() {
    return Promise.resolve(this.bookings);
  }

  favorite(hotel) {
    this.favoriteCounter = this.favoriteCounter + 1;
    let exist = false;

    if (this.favorites && this.favorites.length > 0) {
      this.favorites.forEach((val, i) => {
        if (val.hotel.id === hotel.id) {
          exist = true;
        }
      });
    }

    if (!exist) {
      this.favorites.push({ id: this.favoriteCounter, hotel: hotel });
    }

    return Promise.resolve();
  }

  booking(hotel) {
    this.bookingCounter = this.bookingCounter + 1;
    let existb = false;

    if (this.bookings && this.bookings.length > 0) {
      this.bookings.forEach((val, i) => {
        if (val.hotel.id === hotel.id) {
          existb = true
        }
      });
    }

    if (!existb) {
      this.bookings.push({ id: this.bookingCounter, hotel: hotel });
    }

    return Promise.resolve();
  }

  unfavorite(favorite) {
    let index = this.favorites.indexOf(favorite);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }


}
