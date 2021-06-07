import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinyService } from '../services/destinyService/destiny.service';
import { LoginService } from '../services/loginService/login.service';
import { OrderService } from '../services/orderService/order.service';

@Component({
  selector: 'app-order',
  templateUrl: 'order.page.html',
  styleUrls: ['order.page.scss'],
})
export class OrderPage implements OnInit {

  id: number;
  currentDestiny: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private readonly destinyService: DestinyService,
    private orderService: OrderService,
    private loginService: LoginService) {

  }
  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id);
    const destinations = await this.destinyService.getDestiny();
    this.currentDestiny = destinations.filter(d => d.id == this.id)[0];
    console.log(this.currentDestiny);
  }

  async AddOrderToPerfil() {
    let currentUser = await this.loginService.getCurrentUser();
    this.orderService.setOrder(currentUser, this.currentDestiny);
    this.router.navigate(['/account', currentUser.id]);
  }
}
