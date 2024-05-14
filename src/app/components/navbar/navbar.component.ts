import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userEmail: string | null = null;
  isAdmin: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserEmail().subscribe(userEmail => {
      console.log('Correo electrónico recibido en NavbarComponent:', userEmail);
      this.userEmail = userEmail;
    });

    this.userService.getIsAdmin().subscribe(isAdmin => {
      console.log('Estado de administrador recibido en NavbarComponent:', isAdmin);
      this.isAdmin = isAdmin;
    });
  }
}
