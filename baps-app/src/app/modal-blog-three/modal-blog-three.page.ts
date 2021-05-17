import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-blog-three',
  templateUrl: './modal-blog-three.page.html',
  styleUrls: ['./modal-blog-three.page.scss'],
})
export class ModalBlogThreePage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
