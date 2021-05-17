import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalDestinyPage } from '../modal-destiny/modal-destiny.page';

@Component({
  selector: 'app-destiny',
  templateUrl: 'destiny.page.html',
  styleUrls: ['destiny.page.scss'],
})
export class DestinyPage  { 

  constructor(
    private modalCtrl: ModalController
    ) {}

  async showModalDestiny(){
    const modal = await this.modalCtrl.create({
      component: ModalDestinyPage
    });

    modal.present();
  }
}
