import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-blog-one',
  templateUrl: './modal-blog-one.page.html',
  styleUrls: ['./modal-blog-one.page.scss'],
})
export class ModalBlogOnePage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
