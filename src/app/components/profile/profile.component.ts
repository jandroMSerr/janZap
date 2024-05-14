import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userEmail: string | null = null;
  constructor(  private authService: AuthService,private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUserEmail().subscribe(userEmail => {
      console.log('Correo electrónico recibido en NavbarComponent:', userEmail);
      this.userEmail = userEmail;
    });
  }
  logOut() {
    this.authService.logOut();
  }
  forgotpassword(){
    const userEmails = (this.userEmail+"@gmail.com")
    this.authService.forgotPassword(userEmails);
  }
}
