import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import{ MedicService} from '../medic.service';

@Component({
  selector: 'app-medic-add',
  templateUrl: './medic-add.component.html',
  styleUrls: ['./medic-add.component.css']
})
export class MedicAddComponent implements OnInit {

  public checkoutForm;

  constructor(
    private medicService: MedicService,
    private formBuilder: FormBuilder
    ) { 

    this.checkoutForm = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit() {

  }

  onSubmit(customerData) {
  
    var medic = {
      medicId: 10,
      name: customerData.name
    };

    this.medicService.addMedic(medic);

    console.log(this.medicService.getMedics());
  
  }

}
