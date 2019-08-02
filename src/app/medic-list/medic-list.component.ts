import { Component, OnInit } from '@angular/core';
import { medics } from '../medics';

@Component({
  selector: 'app-medic-list',
  templateUrl: './medic-list.component.html',
  styleUrls: ['./medic-list.component.css']
})
export class MedicListComponent implements OnInit {

  medics = medics;

  constructor() { }

  ngOnInit() {

  }

}
