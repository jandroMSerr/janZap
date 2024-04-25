import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Place, Portada2, Portada3, Portada4, Portada5} from 'src/app/shared/interfaces/admin';
import { PlacesService } from 'src/app/shared/services/admin.service'; 
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  formulario: FormGroup; formularioPortada2: FormGroup; formularioPortada3: FormGroup;
  formularioPortada4: FormGroup; formularioPortada5: FormGroup;

  images: string[];
  
  places: Place[]; portada2: Portada2[]; portada3: Portada3[]; portada4: Portada4[]; portada5: Portada5[];

  constructor(
    private placesService: PlacesService, private storage: Storage
  ) {
    this.images = [];
    this.formulario = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl()
    }),

    this.formularioPortada2 = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl()
    }),

    this.formularioPortada3 = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl()
    }),
    this.formularioPortada4 = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl()
    }),
    this.formularioPortada5 = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl()
    }),


    this.places = [{
      id: '',
      name: '',
      description: ''
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
  async onClickDelete(place: Place) {
    const response = await this.placesService.deletePlaces(place);
    console.log(response);
  }
  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.placesService.addPlace(this.formulario.value);
    console.log(response);
    
  }
  uploadImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages();
        alert("Subido correctamente");
      })
      .catch(error => console.log(error));

  }
  getImages() {
    const imagesRef = ref(this.storage, 'images');

    listAll(imagesRef)
      .then(async response => {
        console.log(response);
        this.images = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.images.push(url);
        }
      })
      .catch(error => console.log(error));
  }


  // portada 2
  
  async onClickDeletePortada2(portada2: Portada2) {
    const response = await this.placesService.deletePlace2(portada2);
    console.log(response);
  }
  async onSubmitPortada2() {
    console.log(this.formularioPortada2.value)
    const response = await this.placesService.addPortada2(this.formularioPortada2.value);
    console.log(response);
  }
  // portada 3
  
  async onClickDeletePortada3(portada3: Portada3) {
    const response = await this.placesService.deletePlace3(portada3);
    console.log(response);
  }
  async onSubmitPortada3() {
    console.log(this.formularioPortada3.value)
    const response = await this.placesService.addPortada3(this.formularioPortada3.value);
    console.log(response);
  }
  // portada 4
   
  async onClickDeletePortada4(portada4: Portada4) {
    const response = await this.placesService.deletePlace4(portada4);
    console.log(response);
  }
  async onSubmitPortada4() {
    console.log(this.formularioPortada4.value)
    const response = await this.placesService.addPortada4(this.formularioPortada4.value);
    console.log(response);
  }
  // portada 5
   
  async onClickDeletePortada5(portada5: Portada5) {
    const response = await this.placesService.deletePlace5(portada5);
    console.log(response);
  }
  async onSubmitPortada5() {
    console.log(this.formularioPortada5.value)
    const response = await this.placesService.addPortada5(this.formularioPortada5.value);
    console.log(response);
  }


}
