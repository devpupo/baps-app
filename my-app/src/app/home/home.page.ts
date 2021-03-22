import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Promotion } from '../model/promotion.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts : any;

  promotions: Promotion[] = [];

  @ViewChild(IonSlides, {static: true}) slides: IonSlides;

  constructor(private router: Router) { 
    this.InitializePromotions();
    this.slideOpts = {
      initialSlide: 1,
      slidesPerView: 1,
      speed: 400,
      autoplay: true
    };
  }

  InitializePromotions() {

    this.promotions.push(new Promotion('Paris', 6224, 10, 'GRU', 'CDG', './../../assets/img/paris.jpg'));
    this.promotions.push(new Promotion('New York', 8284, 10, 'GRU', 'NYC', './../../assets/img/new-york.jpg'));
    this.promotions.push(new Promotion('Toronto', 10082, 10, 'GRU', 'YVZ', './../../assets/img/toronto.jpg'));
  }  
}
