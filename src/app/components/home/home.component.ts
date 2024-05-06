import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PlacesService } from 'src/app/shared/services/admin.service';
import { Place, Portada2, Portada3, Portada4, Portada5 } from 'src/app/shared/interfaces/admin';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class homeComponent implements OnInit {

  places: Place[]; portada2: Portada2[]; portada3: Portada3[]; portada4: Portada4[]; portada5: Portada5[];


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
      size: '',
      
    }];
    this.portada2 = [{
      id: '',
      name: '',
      description: '',
    }];
    this.portada3 = [{
      id: '',
      name: '',
      description: '',
    }];
    this.portada4 = [{
      id: '',
      name: '',
      description: '',
    }];
    this.portada5 = [{
      id: '',
      name: '',
      description: '',
    }];
  }

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })
    this.placesService.getPortada2().subscribe(portada2 => {
      this.portada2 = portada2;
    })
    this.placesService.getPortada3().subscribe(portada3 => {
      this.portada3 = portada3;
    })
    this.placesService.getPortada4().subscribe(portada4 => {
      this.portada4 = portada4;
    })
    this.placesService.getPortada5().subscribe(portada5 => {
      this.portada5 = portada5;
    })
  }

  logOut() {
    this.authService.logOut();
  }


}
