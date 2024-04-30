import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  submitForm() {
    if (!this.formData.nombre || !this.formData.email || !this.formData.mensaje) {
      alert('Por favor, rellena todos los campos.');
      return;
    }
    
    // Aquí puedes agregar la lógica para enviar el formulario, como enviarlo a través de un servicio HTTP
    alert('El formulario se ha enviado.');
    // Puedes agregar lógica adicional aquí, como restablecer el formulario o navegar a otra página
  }
  
}
