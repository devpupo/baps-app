import { Component, OnInit } from '@angular/core';
import { DestinyService } from '../services/destinyService/destiny.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-destiny',
  templateUrl: './modal-destiny.page.html',
  styleUrls: ['./modal-destiny.page.scss'],
})
export class ModalDestinyPage implements OnInit {
  currentDestiny: any = {};
  currentTemperatures: any = {};
  constructor(
    private route: ActivatedRoute,
    private readonly destinyService: DestinyService,
    private http: HttpClient
  ) {}

  id: any;

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    const destinations = await this.destinyService.getDestiny();
    this.currentDestiny = destinations.filter((d) => d.id == this.id)[0];
    this.callApi(this.currentDestiny.id);
  }

  async callApi(city: number) {
    const cities = [
      {
        id: 20,
        latitude: '28.426936389690475',
        longitude: '-81.46761727866425',
      },
      {
        id: 21,
        name: 'Buenos Aires',
        latitude: '-34.604928437833316',
        longitude: '58.44640504815211',
      },
      {
        id: 22,
        name: 'las vegas',
        latitude: '36.168830552197235',
        longitude: '-115.13772045057686',
      },
    ];
    const rightCity = cities.find((c) => c.id === city);
    const access_key = 'bb60b0c070aaf1a4931cd9a6a8783049d2ce8447ecfeb2474f';
    const url = `https://api.troposphere.io/forecast/${rightCity.latitude},${rightCity.longitude}?token=${access_key}`;
    const response = await this.http.get(url).toPromise();
    this.currentTemperatures = response;
  }
}
