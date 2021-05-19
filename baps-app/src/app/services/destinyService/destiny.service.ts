import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

interface Destiny {
  id: number,
  destiny: string,
  total: number
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
      total: 1080
    },
    {
      id: 21,
      destiny: "Pacote Buenos Aires",
      total: 1699
    },
    {
      id: 22,
      destiny: "Hotel Bellagio Las Vegas",
      total: 5541
    }]
    await this.storage.set('destiny', this.destinations);
  }

  public async getDestiny() {
    return await this.storage.get('destiny');
  }
}