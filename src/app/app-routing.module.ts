import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoogleMapsComponent} from './google-maps/google-maps.component';
import {DetailsItemComponent} from './components/details-item/details-item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'google-maps',
    component: GoogleMapsComponent
  },
  {
    path: 'details-item',
    component: DetailsItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
