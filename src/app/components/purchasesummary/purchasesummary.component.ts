import { Component } from '@angular/core';
import { Place } from 'src/app/shared/interfaces/admin';
import { PlacesService } from 'src/app/shared/services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchasesummary',
  templateUrl: './purchasesummary.component.html',
  styleUrls: ['./purchasesummary.component.scss']
})
export class PurchasesummaryComponent {


  public itemCount: number = 1;
  places: Place[];
  totalPrice: number = 0;
  totalPrices: number = 0;
  totalPriceString: string = '0€';
  selectedShippingOption: string = '';
  allPrice: number = 0;
  discountCode: string = '';
  discountApplied: boolean = false;
  invalidDiscountCode: boolean = false;
  shippingForm!: FormGroup;
  isLoading: boolean = false;
  




  constructor(private placesService: PlacesService,private formBuilder: FormBuilder) {

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
  }

  ngOnInit(): void {
    this.createShippingForm();

    this.placesService.getProduct().subscribe(places => {
      this.places = places;

      // Reinicia el total
      this.totalPrice = 0;
      this.itemCount = 0;

      // Productos
      this.places.forEach(product => {
        this.itemCount++;
      });
      // Suma los precios
      this.places.forEach(product => {
        this.totalPrice += Number(product.price); // Convertir a número
      });

      // Formatea el total con dos decimales y el símbolo de euro
      this.totalPriceString = this.totalPrice.toFixed(2) + '€';

      // Calcula el precio total
      this.sendItem();

      // Codigo
      this.applyDiscount();
    });
  }

  sendItem() {

    switch (this.selectedShippingOption) {
      case '0':
        this.allPrice = this.totalPrice;
        break;
      case '15':
        this.allPrice = this.totalPrice + 15;
        break;
      case '25':
        this.allPrice = this.totalPrice + 25;
        break;
      default:
        this.allPrice = this.totalPrice;
        break;
    }
  }
   //Inicio  - Descuento en cesta de la copra
  applyDiscount() {
    const discountAmount = this.getDiscountAmount(this.discountCode);

    if (discountAmount > 0) {
      this.allPrice -= discountAmount;
      this.discountApplied = true;
      this.discountCode = '';
      this.invalidDiscountCode = false;
    } else {
      this.invalidDiscountCode = true;
    }
  }

  getDiscountAmount(code: string): number {
    switch (code) {
      case 'JANZAP10':
        return 10;
      case 'JANZAP15':
        return 15;
      default:
        return 0;
    }
  }

  async deleteProduct(place: Place) {
    const response = await this.placesService.deleteProduct(place);
    console.log(response);
  }
  //Fin - Descuento cesta compra

  createShippingForm(): void {
    this.shippingForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      address2: [''],
      country: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
      state: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
    });
  }

  //Inicio - Envio y borrado de formulario
  submitShippingForm(): void {
    if (this.shippingForm.valid && this.selectedShippingOption) {
      console.log(this.shippingForm.value);
      this.shippingForm.reset(); 
      alert('¡¡SU PEDIDO SE HA REALIZADO CON ÉXTIO');
    } else {
      this.markFormGroupTouched(this.shippingForm);
      alert('Revise que todos los campso estén completos.');
    }
  }


  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  //Fin - Envío y borrado de formulario

}
