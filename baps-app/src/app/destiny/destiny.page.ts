import { Component, OnInit } from '@angular/core';
import { DestinyService } from '../services/destinyService/destiny.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-destiny',
  templateUrl: 'destiny.page.html',
  styleUrls: ['destiny.page.scss'],
})
export class DestinyPage implements OnInit {

  constructor(
    private destinyService: DestinyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.destinyService.setDestiny();
  }

  async showModalDestiny(key: number) {
    this.router.navigate(['/modal-destiny', key]);
  }
}
