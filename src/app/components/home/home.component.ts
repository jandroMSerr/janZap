import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent {

  constructor(private authService: AuthService) {

  }


  logOut() {
    this.authService.logOut();
  }
}
