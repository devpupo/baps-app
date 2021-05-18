import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-destiny',
  templateUrl: './modal-destiny.page.html',
  styleUrls: ['./modal-destiny.page.scss'],
})
export class ModalDestinyPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
}
