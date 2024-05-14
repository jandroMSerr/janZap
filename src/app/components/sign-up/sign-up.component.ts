import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { PlaceUser } from 'src/app/shared/interfaces/admin';
import { PlacesService } from 'src/app/shared/services/admin.service';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  formularioUser: FormGroup;
  constructor(private authService: AuthService,private formBuilder: FormBuilder, private placesService: PlacesService, private router: Router, private firestore: Firestore) {
    this.formularioUser = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }
  ngOnInit(): void {
    this.formularioUser = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
    });
  }

  signUp(email: string, password: string) {
    this.authService.signUpWithEmailAndPassword(email, password);

  }

  clear() {
    this.formularioUser.reset();
  }
  async onSubmit() {
    console.log(this.formularioUser.value)
    if (this.formularioUser.value.name && this.formularioUser.value.email && this.formularioUser.value.password) {
      const response = await this.placesService.addUser(this.formularioUser.value);
      console.log(response);
      this.signUp(this.formularioUser.value.email , this.formularioUser.value.password);
      this.clear();
      
    }
    else {
      alert('Faltan campos por completar')
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

}
