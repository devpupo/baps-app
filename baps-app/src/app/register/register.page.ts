import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
import { RegisterService } from '../services/registerService/register-service.service';
@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  public id: number;
  public name: string;
  public email: string;
  public cpf: string;
  public address: string;
  public birth: string;
  public password: string;

  constructor(private registerService: RegisterService, private router: Router) {}

  ngOnInit() {}

    public user = {
      id: 0,
      name: '',
      email: '',
      cpf: '',
      address: '',
      birth: '',
      password: ''
    };

  onSave() {
    this.registerService.addUser(this.user);
    this.router.navigate(['account', this.user.id]);
  }
}
