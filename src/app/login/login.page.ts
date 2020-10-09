import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import {AuthService} from "../shared/authenticationservices"
import {FormBuilder,Validators} from "@angular/forms"
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   signfrm:any;
  errormsg:string;
  constructor(private fb:FormBuilder,  private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.signfrm =this.fb.group({
       EmailID:[null,[Validators.required,Validators.email]],
       Password:[null,[Validators.required]]
    });
  }
  logIn() {
  
    this.authService.SignIn(this.signfrm.value.EmailID, this.signfrm.value.Password)
      .then((res) => {
         localStorage.setItem("UserName",this.signfrm.value.EmailID);
         this.router.navigate(['dashboard']);          
        }).catch((error) => {
        // window.alert(error.message)
         this.errormsg = error.message;
      })
  }

  newSignUp()
  {
    this.router.navigate(['/registration']);
  }

}
