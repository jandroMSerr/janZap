import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/shared/services/admin.service';
import { Place } from 'src/app/shared/interfaces/admin';


@Component({
  selector: 'app-shopdetail',
  templateUrl: './shopdetail.component.html',
  styleUrls: ['./shopdetail.component.scss']
})
export class ShopdetailComponent implements OnInit {
  places: Place[];
  
  constructor(
    private placesService: PlacesService, 
    
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
  
  
  anadirCesta(products:Place){

    this.placesService.addNewProduct(products);
      
  }

}
