import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule,FormsModule} from "@angular/forms"
import { RegistrationPage } from './registration.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule,FormsModule],
  exports: [RouterModule,ReactiveFormsModule,FormsModule],
})
export class RegistrationPageRoutingModule {}
