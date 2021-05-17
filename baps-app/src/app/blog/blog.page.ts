import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalBlogOnePage } from '../modal-blog-one/modal-blog-one.page';
import { ModalBlogThreePage } from '../modal-blog-three/modal-blog-three.page';
import { ModalBlogTwoPage } from '../modal-blog-two/modal-blog-two.page';

@Component({
  selector: 'app-home',
  templateUrl: 'blog.page.html',
  styleUrls: ['blog.page.scss'],
})
export class BlogPage {

  constructor(
    private modalCtrl: ModalController
  )
  {}

 async modalBlog1(){
    const modalCtrl = await this.modalCtrl.create({
      component: ModalBlogOnePage
    });

    modalCtrl.present();
  }

  async modalBlog2(){
    const modalCtrl = await this.modalCtrl.create({
      component: ModalBlogTwoPage
    });

    modalCtrl.present();
  }

  async modalBlog3(){
    const modalCtrl = await this.modalCtrl.create({
      component: ModalBlogThreePage
    });

    modalCtrl.present();
  }

}
