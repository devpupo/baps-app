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
}

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

  public getUser(id: number): User { 
    return {...this.users.find((s) => s.id === id) }; 
  } 

  public updateUser(id: number, user: User) { 
    const oldUser = this.users.find((s) => s.id === 1);
    oldUser.name = user.name;
    oldUser.email = user.email;
    oldUser.cpf = user.cpf;
    oldUser.address = user.address;
    oldUser.birth = user.birth;
    oldUser.password = user.password;

    this.storage.set("users", this.users);
  } 

  public addUser(user: User) {
    const maxId = Math.max(0, ...this.users.map(s => s.id));
    user.id = maxId + 1;
    this.users.push({ ...user});
    this.storage.set('users', this.users);
  }
}