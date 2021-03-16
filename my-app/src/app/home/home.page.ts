import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  navCtrl: any;

  constructor(private router: Router) { }

  openNavLoginPage() {
    this.router.navigate(['/login/LoginPage']);
  }

}
