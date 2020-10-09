import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import {AuthService} from '../shared/authenticationservices'
import {FormBuilder,Validators} from "@angular/forms"
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  signupfrm:any;
  errormessage:string;
  constructor(private fb:FormBuilder, private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.signupfrm = this.fb.group({
      EmailID:[null,[Validators.required,Validators.email]],
      Password:[null,[Validators.required]]
    });
  }

  register(){
    this.authService.RegisterUser(this.signupfrm.value.EmailID, this.signupfrm.value.Password)      
    .then((res) => {
      // Do something here
     // alert(JSON.stringify(res));
     this.router.navigate(['/login']);
    }).catch((error) => {
      // window.alert("Error:"+error.message)
      this.errormessage = error.message;
    })
 }

 login()
  {
    this.router.navigate(['/login']);
  }

}
