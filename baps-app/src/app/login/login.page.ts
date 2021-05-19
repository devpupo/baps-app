import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { LoginService } from '../services/loginService/login.service';
import { RegisterService } from '../services/registerService/register-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(private loginService: LoginService,
    private registerService: RegisterService,
    private router: Router) { }

  ngOnInit() {
  }

  setCurrentUser() {
    var users = this.registerService.allUsers();
    var currentUser = users.find((x: User) => x.email == this.email);
    if (currentUser == null) {
      alert('Usuario não existe');
    } else {
      this.loginService.setCurrentUser(currentUser);
      this.router.navigate(['/account']);
    }
  }
}
