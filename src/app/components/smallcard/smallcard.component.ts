import { Component } from '@angular/core';
import { Place } from 'src/app/shared/interfaces/admin';
import { PlacesService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-smallcard',
  templateUrl: './smallcard.component.html',
  styleUrls: ['./smallcard.component.scss']
})
export class SmallcardComponent {
  places: Place[];


  constructor( private placesService: PlacesService, ) {

    {
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
  
    }
  }

  ngOnInit(): void {
    this.placesService.getProduct().subscribe(places => {
      this.places = places;
    })
  }
  async deleteProducts(place: Place) {
    const response = await this.placesService.deleteProduct(place);
    console.log(response);
  }

}
