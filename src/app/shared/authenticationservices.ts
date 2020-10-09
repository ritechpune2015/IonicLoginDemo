import {Injectable, NgZone} from "@angular/core"
import {auth} from "firebase/app"
import {user} from "./user"
import {Router} from "@angular/router"
import {AngularFireAuth} from "@angular/fire/auth"
import {AngularFirestore,AngularFirestoreDocument } from "@angular/fire/firestore"

@Injectable({
  providedIn:'root'
    })
export class AuthService
{
   userinfo:any;
   constructor(private router:Router,private ngzone:NgZone,
    private fireauth:AngularFireAuth,
    private firestore:AngularFirestore)   {
        this.fireauth.authState.subscribe(user=>{
            if(user) {
            this.userinfo=user;
          localStorage.setItem('userinfo',JSON.stringify(this.userinfo));
          JSON.parse(localStorage.getItem('userinfo'));    
        }
        else{

             localStorage.setItem('userinfo',null);
             JSON.parse(localStorage.getItem('userinfo'));
        }
     })
   }

   SignIn(email,password)
   {
    return this.fireauth.signInWithEmailAndPassword(email,password);
   }
   RegisterUser(email,password)
   {
     return this.fireauth.createUserWithEmailAndPassword(email,password);
   }
   get isSignedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('userinfo'));
    return (user !== null) ? true : false;
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth providers
  AuthLogin(provider) {
    return this.fireauth.signInWithPopup(provider)
    .then((result) => {
       this.ngzone.run(() => {
          this.router.navigate(['dashboard']);
        })
      this.SaveUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }


  SaveUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);
    const userData: user = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign-out 
  SignOut() {
    return this.fireauth.signOut().then(() => {
      localStorage.removeItem('userinfo');
      this.router.navigate(['login']);
    })
  }

}