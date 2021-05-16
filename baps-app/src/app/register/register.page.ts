import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { RegisterService } from '../services/registerService/register-service.service';
@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  public name: string;
  public email: string;
  public cpf: string;
  public address: string;
  public birth: string;
  public password: string;

  constructor(private registerService: RegisterService) {}

  ngOnInit() {}

  onSave() {
    const user = {
      name: this.name,
      email: this.email,
      cpf: this.cpf,
      address: this.address,
      birth: this.birth,
      password: this.password,
    };
    this.registerService.addUser(user);
    this.registerService.getAllUsersAsync();
  }
}
