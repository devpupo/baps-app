import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalDestinyPage } from '../modal-destiny/modal-destiny.page';
import { DestinyService } from '../services/destinyService/destiny.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-destiny',
  templateUrl: 'destiny.page.html',
  styleUrls: ['destiny.page.scss'],
})
export class DestinyPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private destinyService: DestinyService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.destinyService.setDestiny();
  }

  async showModalDestiny(key: number) {
    this.dialog.open(ModalDestinyPage, {
      data: {
        "key": key
      },
      height: '800px',
      width: '1200px',
    });
  }
}
