import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

interface Destiny {
  id: number,
  destiny: string,
  value: number
};

@Injectable({
  providedIn: 'root',
})
export class DestinyService {
  constructor(private storage: Storage) {
  }

  private destinations: Destiny[] = [];

  public async setDestiny() {
    this.destinations = [{
      id: 20,
      destiny: "Hyatt Regency Orlando",
      value: 1080
    },
    {
      id: 21,
      destiny: "Pacote Buenos Aires",
      value: 1699
    },
    {
      id: 22,
      destiny: "Hotel Bellagio Las Vegas",
      value: 5541
    }]
    await this.storage.set('destiny', this.destinations);
  }

  public async getDestiny() {
    return await this.storage.get('destiny');
  }
}