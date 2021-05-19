import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private storage: Storage) { }

  setCurrentUser(user: User){
    this.storage.set('currentUser', user);
  }

  async getCurrentUser(){
    return await this.storage.get('currentUser');
  }
}
