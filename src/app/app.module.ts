import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MedicListComponent } from './medic-list/medic-list.component';
import { MedicDetailsComponent } from './medic-details/medic-details.component';
import { MedicAddComponent } from './medic-add/medic-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicListComponent,
    MedicDetailsComponent,
    MedicAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'medics', component: MedicListComponent },
      { path: 'medic/:medicId', component: MedicDetailsComponent },
      { path: 'add-medic', component: MedicAddComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
