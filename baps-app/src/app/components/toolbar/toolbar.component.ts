import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/loginService/login.service';
import { RegisterService } from 'src/app/services/registerService/register-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolBarComponent implements OnInit {

  public id: number;

  public usuarios = this.user.allUsers();
  currentUser: User;

  constructor(private router: Router,
    private user: RegisterService,
    private loginService: LoginService) { }

  async ngOnInit() {
    this.currentUser = await this.loginService.getCurrentUser();
    this.usuarios = [this.currentUser];
  }
  onClick() {
    let result;

    if (this.currentUser == null) {
      result = this.router.navigate(['/accountoff']);
      console.log("teste");
    }
    result = this.router.navigate(['/account', this.currentUser.id]);
  }

  onDestiny(){
    this.router.navigate(['/destiny']);
  }

  onAbout(){
    this.router.navigate(['/about']);
  }

  onBlog(){
    this.router.navigate(['/blog']);
  }
}
