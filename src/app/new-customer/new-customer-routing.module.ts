import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCustomerPage } from './new-customer.page';
import {ReactiveFormsModule,FormsModule} from "@angular/forms"

const routes: Routes = [
  {
    path: '',
    component: NewCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule,FormsModule],
  exports: [RouterModule,ReactiveFormsModule,FormsModule],
})
export class NewCustomerPageRoutingModule {}
