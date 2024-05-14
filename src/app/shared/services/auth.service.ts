import { Injectable, NgZone } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    private firebaseAuthenticationService: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private userService: UserService
  ) {
    this.firebaseAuthenticationService.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));

        const emailPart = user.email?.split('@')[0] || '';
        this.userService.setUserEmail(emailPart); // Establece solo la parte del correo antes del '@'
        console.log('Correo electrónico del usuario almacenado:', emailPart);
      } else {
        localStorage.setItem('user', 'null');
        this.userService.setUserEmail(null);
      }
    });

  }

  // log-in with email and password
  logInWithEmailAndPassword(email: string, password: string) {
    return this.firebaseAuthenticationService.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.userData = userCredential.user;
        this.userService.setUserEmail(this.userData.email);
        this.observeUserState();
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  // log-in with google
  logInWithGoogleProvider() {
    return this.firebaseAuthenticationService.signInWithPopup(new GoogleAuthProvider())
      .then((userCredential) => {
        this.userData = userCredential.user;
        this.userService.setUserEmail(this.userData.email);
        this.observeUserState();
      })
      .catch((error: Error) => {
        alert(error.message);
      });
  }

  // sign-up with email and password
  signUpWithEmailAndPassword(email: string, password: string) {
    return this.firebaseAuthenticationService.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.userData = userCredential.user;
        this.userService.setUserEmail(this.userData.email);
        this.observeUserState();
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  observeUserState() {
    this.firebaseAuthenticationService.authState.subscribe((userState) => {
      userState && this.ngZone.run(() => this.router.navigate(['home']));
    });
  }

  // return true when user is logged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

  // logOut
  logOut() {
    return this.firebaseAuthenticationService.signOut().then(() => {
      localStorage.removeItem('user');
      this.userService.setUserEmail(null);
      this.router.navigate(['login']);
    });
  }

  // forgot password
  forgotPassword(email: string) {
    return this.firebaseAuthenticationService.sendPasswordResetEmail(email)
      .then(() => {
        alert("Revisa tu correo")
      })
      .catch((error) => {
        alert(' No has introducido ningun correo');
      });
  }
}
