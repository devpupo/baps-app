import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterService } from '../services/registerService/register-service.service';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss'],
})
export class AccountPage {

  constructor(
    private user: RegisterService) {}

  public usuarios = this.user.allUsers();
  }


