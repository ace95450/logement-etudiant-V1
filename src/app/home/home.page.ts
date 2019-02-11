import {Component, OnInit} from '@angular/core';
import { ImmoService } from '../services/immo/immo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public immos: ImmoService) {
    this.immos = immos.getAll();
  }

  ngOnInit() {  }


}
