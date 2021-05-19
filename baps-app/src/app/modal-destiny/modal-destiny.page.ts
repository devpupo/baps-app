import { Component, OnInit } from '@angular/core';
import { DestinyService } from '../services/destinyService/destiny.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-destiny',
  templateUrl: './modal-destiny.page.html',
  styleUrls: ['./modal-destiny.page.scss'],
})
export class ModalDestinyPage implements OnInit {

  currentDestiny: any = {};

  constructor(
    private route: ActivatedRoute,
    private readonly destinyService: DestinyService
  ) { }

  id: any;

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    const destinations = await this.destinyService.getDestiny();
    this.currentDestiny = destinations.filter(d => d.id == this.id)[0];
  }
}
