import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/shared/services/admin.service';
import { Place,PlaceTop,PlaceTopMujer } from 'src/app/shared/interfaces/admin';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class homeComponent implements OnInit {

  places: Place[]; placesTop: PlaceTop[]; placesTopMujer: PlaceTopMujer[];


  constructor(

    private placesService: PlacesService
  ) {
    this.places = [];
    this.placesTop = [];
    this.placesTopMujer = [];
  }

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })
    this.placesService.getProductTop().subscribe(placestop => {
      this.placesTop = placestop;
    })

    this.placesService.getProductTopMujer().subscribe(placestopMujer => {
      this.placesTopMujer = placestopMujer;
    })
  }


}
