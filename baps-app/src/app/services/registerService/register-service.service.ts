import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

type User = {
  id: number,
  name: string,
  email: string,
  cpf: string,
  address: string,
  birth: string,
  password: string
};

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private storage: Storage) {
    this.getAllUsersAsync();
  }

  private users: User[] = [];

  public async getAllUsersAsync() {
    const allUsers = await this.storage.get('users');
    if (allUsers) {
      this.users.push(...allUsers);
    }
  }

  public allUsers(): Readonly<User>[] { 
    return this.users; 
  } 

  public addUser(user: User) {
    const maxId = Math.max(0, ...this.users.map(s => s.id));
    user.id = maxId + 1;
    this.users.push({ ...user});
    this.storage.set('users', this.users);
  }
}