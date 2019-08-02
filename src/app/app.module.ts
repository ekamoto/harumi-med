import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MedicListComponent } from './medic-list/medic-list.component';
import { MedicDetailsComponent } from './medic-details/medic-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicListComponent,
    MedicDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'medics', component: MedicListComponent },
      { path: 'medic/:medicId', component: MedicDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
