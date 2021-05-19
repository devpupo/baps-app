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
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private user: RegisterService) {

    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.usuario = this.user.getUser(this.id);
    });
  }

  async close(){
    await this.user.updateUser(this.id, this.usuario);
    this.navCtrl.back();
  }

}
