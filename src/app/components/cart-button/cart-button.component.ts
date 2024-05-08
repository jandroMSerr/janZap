import { Component } from '@angular/core';
import { Place } from 'src/app/shared/interfaces/admin';
import { PlacesService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent {

  public itemCount: number = 1;
  public isPopoverVisible: boolean = true;
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

  togglePopover(): void {
    this.isPopoverVisible = !this.isPopoverVisible;
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
  
  async deleteProduct(place: Place) {
    const response = await this.placesService.deleteProduct(place);
    console.log(response);
  }
}
