import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicService {

  public medics = [
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
    }
  ];

  constructor() { 
  }

  addMedic(medic) {
    alert(medic.name + " add success!");
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
