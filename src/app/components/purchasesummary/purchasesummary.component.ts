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
        size: '',

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
  applyDiscount() {
    // Realizar lógica para aplicar el descuento según el código ingresado
    const discountAmount = this.getDiscountAmount(this.discountCode);

    if (discountAmount > 0) {
      // Aplicar descuento al precio total
      this.allPrice -= discountAmount;
      // Marcar que se ha aplicado el descuento
      this.discountApplied = true;
      // Limpiar el campo de código de descuento
      this.discountCode = '';
      // Ocultar mensaje de error
      this.invalidDiscountCode = false;
    } else {
      // Código de descuento no válido o no encontrado
      // Mostrar mensaje de error
      this.invalidDiscountCode = true;
    }
  }


  getDiscountAmount(code: string): number {
    // Implementa la lógica para buscar el código de descuento en una lista o base de datos
    // y devolver el valor del descuento asociado
    // En este ejemplo, devolvemos diferentes valores para diferentes códigos de descuento
    switch (code) {
      case 'DESCUENTO10':
        return 10; // Descuento de 10 euros
      case 'DESCUENTO15':
        return 15; // Descuento de 15 euros
      default:
        return 0; // Código no válido
    }
  }



  async deleteProduct(place: Place) {
    const response = await this.placesService.deleteProduct(place);
    console.log(response);
  }


  createShippingForm(): void {
    // Definir el FormGroup y sus controles
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

  submitShippingForm(): void {
    if (this.shippingForm.valid && this.selectedShippingOption) {
      // Envío del formulario y lógica adicional
      console.log(this.shippingForm.value);
      this.shippingForm.reset(); // Reiniciar el formulario después del envío
      alert('Enviado al almacen');
    } else {
      // Marcar los campos inválidos como tocados para mostrar los mensajes de error
      this.markFormGroupTouched(this.shippingForm);
      alert('Revisa que esten todos los campos requeridos o el envio este correcto');
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

}
