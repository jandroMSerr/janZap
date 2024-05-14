import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PlacesService } from 'src/app/shared/services/admin.service';
import { Place } from 'src/app/shared/interfaces/admin';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class homeComponent implements OnInit {

  places: Place[];


  constructor(
    private authService: AuthService,
    private placesService: PlacesService
  ) {

    this.places = [{
      id: '',
      name: '',
      description: '',
      price: 0,
      picture: '',
      rating: 0,
      comments: '',
      color: '',
      sizeshoes33: '',
      sizeshoes34: '',
      sizeshoes35: '',
      sizeshoes36: '',
      sizeshoes37: '',
      sizeshoes38: '',
      sizeshoes39: '',
      sizeshoes40: '',
      sizeshoes41: '',
      sizeshoes42: '',
      sizeshoes43: '',
      sizeshoes44: '',
      sizeshoes45: '',
      sizeshoes46: '',
      sizeshoes47: '',
      
      
    }];
  }

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })
  }

  logOut() {
    this.authService.logOut();
  }
}
