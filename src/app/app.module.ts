import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import {AngularFireDatabase} from '@angular/fire/database';
import {AuthService} from './services/auth/auth.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { DetailsItemComponent } from './components/details-item/details-item.component';
export const firebaseConfig = environment.firebase;

@NgModule({
  declarations: [AppComponent, GoogleMapsComponent, DetailsItemComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
      AngularFirestoreModule,
      AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    AngularFireDatabase,
    SplashScreen,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
