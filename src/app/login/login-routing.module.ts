import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule,FormsModule} from "@angular/forms"
import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule,FormsModule],
  exports: [RouterModule,ReactiveFormsModule,FormsModule],
})
export class LoginPageRoutingModule {}
