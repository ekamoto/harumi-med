import { Component, OnInit } from '@angular/core';
import { medics } from '../medics';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medic-details',
  templateUrl: './medic-details.component.html',
  styleUrls: ['./medic-details.component.css']
})

export class MedicDetailsComponent implements OnInit {

  medic;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      this.medic = medics[+params.get('medicId')];
    });
  }

}
