import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-blog-two',
  templateUrl: './modal-blog-two.page.html',
  styleUrls: ['./modal-blog-two.page.scss'],
})
export class ModalBlogTwoPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }
}
