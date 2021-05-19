import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Destiny } from '../model/destiny';
import { User } from '../model/user';
import { LoginService } from '../services/loginService/login.service';
import { OrderService } from '../services/orderService/order.service';
import { RegisterService } from '../services/registerService/register-service.service';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss'],
})
export class AccountPage implements OnInit {
  public usuarios = this.user.allUsers();
  currentUser: User;
  userHasOrders: boolean = false;
  userDestinations: Destiny[];

  constructor(
    private router: Router,
    private user: RegisterService,
    private loginService: LoginService,
    private orderService: OrderService) { }

  async ngOnInit(){
    this.currentUser = await this.loginService.getCurrentUser();
    this.usuarios = [this.currentUser];
    this.userDestinations = await this.orderService.getOrder(this.currentUser);
  }

  editInfo(){
    let result = this.router.navigate(['/edit-info', this.currentUser.id]);
    console.log(result);
  }

}


