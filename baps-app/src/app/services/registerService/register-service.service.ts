import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

type User = {
  name: string;
  email: string;
  cpf: string;
  address: string;
  birth: string;
  password: string;
};

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private storage: Storage) {}

  private users: User[] = [];

  public async getAllUsersAsync() {
    const allUsers = await this.storage.get('users');
    if (!!allUsers) {
      console.log(allUsers);
    }
  }

  public addUser(user: User) {
    this.users.push({ ...user });
    this.storage.set('users', this.users);
  }
}
