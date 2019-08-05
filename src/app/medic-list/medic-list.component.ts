import { Component, OnInit } from '@angular/core';
import { MedicService } from '../medic.service';

@Component({
  selector: 'app-medic-list',
  templateUrl: './medic-list.component.html',
  styleUrls: ['./medic-list.component.css']
})
export class MedicListComponent implements OnInit {

  public medics = [];

  constructor(private medicService: MedicService) { 
    this.medics = medicService.getMedics();
  }

  ngOnInit() {

  }

}
