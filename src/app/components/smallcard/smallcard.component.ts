import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Place } from 'src/app/shared/interfaces/admin';
import { PlacesService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-smallcard',
  templateUrl: './smallcard.component.html',
  styleUrls: ['./smallcard.component.scss']
})
export class SmallcardComponent {
  places: Place[];
  totalPrice: number = 0;
  totalPriceString: string = '0€';


  constructor(private placesService: PlacesService,) {

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
      
      // Reinicia el total
      this.totalPrice = 0;
      
      // Suma los precios
      this.places.forEach(product => {
        this.totalPrice += Number(product.price); // Convertir a número
      });
      
      // Formatea el total con dos decimales y el símbolo de euro
      this.totalPriceString = this.totalPrice.toFixed(2) + '€';
    });
  }
  
  async deleteProducts(place: Place) {
    const response = await this.placesService.deleteProduct(place);
    console.log(response);
  }
}
