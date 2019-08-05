import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicService } from '../medic.service';

@Component({
  selector: 'app-medic-details',
  templateUrl: './medic-details.component.html',
  styleUrls: ['./medic-details.component.css']
})

export class MedicDetailsComponent implements OnInit {

  private medics;
  public medic;

  constructor(private route: ActivatedRoute, private medicService: MedicService) {
    this.medics = medicService.getMedics();
   }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      this.medic = this.medics[+params.get('medicId')];
    });
  }

}
