import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {  AngularFireDatabase  } from '@angular/fire/database';

import { GeoJson } from '../../map';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})

export class GeoService {


  constructor(private db: AngularFireDatabase) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }



  // Créer un marker
  createMarker(data: GeoJson) {
    return this.db.list('/markers')
        .push(data);
  }

  // SUppression d'un marker
  removeMarker($key: string) {
    return this.db.list('/markers/' + $key).remove();
  }



}
