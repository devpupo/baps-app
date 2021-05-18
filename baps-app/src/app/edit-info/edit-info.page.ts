import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegisterService } from '../services/registerService/register-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.page.html',
  styleUrls: ['./edit-info.page.scss'],
})
export class EditInfoPage implements OnInit {

  public usuario;
  public id;

  constructor(
    route: ActivatedRoute,
    private navCtrl: NavController,
    private user: RegisterService) {
      this.id = 1;
      this.usuario = this.user.getUser(1);
    }

  ngOnInit() {
  }

  close(){
    this.user.updateUser(this.id, this.usuario);
    this.navCtrl.back();
  }

}
