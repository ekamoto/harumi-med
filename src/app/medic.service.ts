import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicService {

  private medics = [];

  constructor() { 

    this.medics = [
      {
          medicId: 1,
          name: 'Dr. Help'
      },
      {
          medicId: 2,
          name: 'Dr. Rivotril'
      },
      {
          medicId: 3,
          name: 'Dr. Arrogante'
      },
      {
          medicId: 4,
          name: 'Dr. Faz o que você quiser'
      }    ];
  }

  addMedic(medic) {
    this.medics.push(medic);
  }

  getMedics() {
    return this.medics;
  }

  clearMedics() {
    this.medics = [];
    return this.medics;
  }
}
