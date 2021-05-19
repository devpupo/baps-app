import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Destiny } from 'src/app/model/destiny';
import { User } from 'src/app/model/user';
import { UserOrder } from 'src/app/model/user-order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  userOrder: UserOrder[];

  constructor(private storage: Storage) { 
    this.userOrder = [];
  }

  setOrder(destiny: User, order: Destiny) {
    let user = this.userOrder.find((x: UserOrder) => x.user.email == destiny.email);
    if (user == null) {
      user = new UserOrder();
      user.user = destiny;
      user.order = [];
      this.userOrder.push(user);
    }

    user.order.push(order);
    this.storage.set(user.user.email, user.order);
  }

  async getOrder(user: User) : Promise<Destiny[]>{
    let userOrder = await this.storage.get(user.email);
    return userOrder;
  }
}
