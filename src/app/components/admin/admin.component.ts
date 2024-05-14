import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Place, PlaceTop,PlaceTopMujer, } from 'src/app/shared/interfaces/admin';
import { PlacesService } from 'src/app/shared/services/admin.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  formulario: FormGroup; formularioTop: FormGroup; formularioTopMujer: FormGroup; 
  images: string[];

  places: Place[]; placesTop: PlaceTop[];placesTopMujer: PlaceTopMujer[];

  constructor(
    private placesService: PlacesService, private storage: Storage
  ) {
    this.images = [];

    this.formulario = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      picture: new FormControl(),
      rating: new FormControl(),
      comments: new FormControl(),
      color: new FormControl(),
      sizeshoes33: new FormControl(),
      sizeshoes34: new FormControl(),
      sizeshoes35: new FormControl(),
      sizeshoes36: new FormControl(),
      sizeshoes37: new FormControl(),
      sizeshoes38: new FormControl(),
      sizeshoes39: new FormControl(),
      sizeshoes40: new FormControl(),
      sizeshoes41: new FormControl(),
      sizeshoes42: new FormControl(),
      sizeshoes43: new FormControl(),
      sizeshoes45: new FormControl(),
      sizeshoes46: new FormControl(),
      sizeshoes47: new FormControl(),

    });

    this.formularioTop = new FormGroup({
      idTop: new FormControl(),
      nameTop: new FormControl(),
      descriptionTop: new FormControl(),
      priceTop: new FormControl(),
      pictureTop: new FormControl(),
      ratingTop: new FormControl(),
      commentsTop: new FormControl(),
      colorTop: new FormControl(),
      sizeshoes33Top: new FormControl(),
      sizeshoes34Top: new FormControl(),
      sizeshoes35Top: new FormControl(),
      sizeshoes36Top: new FormControl(),
      sizeshoes37Top: new FormControl(),
      sizeshoes38Top: new FormControl(),
      sizeshoes39Top: new FormControl(),
      sizeshoes40Top: new FormControl(),
      sizeshoes41Top: new FormControl(),
      sizeshoes42Top: new FormControl(),
      sizeshoes43Top: new FormControl(),
      sizeshoes45Top: new FormControl(),
      sizeshoes46Top: new FormControl(),
      sizeshoes47Top: new FormControl(),

    });

    this.formularioTopMujer = new FormGroup({
      idTopMujer: new FormControl(),
      nameTopMujer: new FormControl(),
      descriptionTopMujer: new FormControl(),
      priceTopMujer: new FormControl(),
      pictureTopMujer: new FormControl(),
      ratingTopMujer: new FormControl(),
      commentsTopMujer: new FormControl(),
      colorTopMujer: new FormControl(),
      sizeshoes33TopMujer: new FormControl(),
      sizeshoes34TopMujer: new FormControl(),
      sizeshoes35TopMujer: new FormControl(),
      sizeshoes36TopMujer: new FormControl(),
      sizeshoes37TopMujer: new FormControl(),
      sizeshoes38TopMujer: new FormControl(),
      sizeshoes39TopMujer: new FormControl(),
      sizeshoes40TopMujer: new FormControl(),
      sizeshoes41TopMujer: new FormControl(),
      sizeshoes42TopMujer: new FormControl(),
      sizeshoes43TopMujer: new FormControl(),
      sizeshoes45TopMujer: new FormControl(),
      sizeshoes46TopMujer: new FormControl(),
      sizeshoes47TopMujer: new FormControl(),

    });

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

  async trakePicture() {
    const dataUrl = (await this.placesService.trakePicture('Imagen del Producto')).dataUrl;
    this.formulario.controls['picture'].setValue(dataUrl)
  }

  async onClickDelete(place: Place) {
    const response = await this.placesService.deletePlaces(place);
    console.log(response);
  }
  clear() {
    this.formulario.reset();
  }
  async onSubmit() {
    console.log(this.formulario.value)
    if (this.formulario.value.name && this.formulario.value.description && this.formulario.value.price && this.formulario.value.picture && this.formulario.value.rating && this.formulario.value.comments && this.formulario.value.color) {
      const response = await this.placesService.addPlace(this.formulario.value);
      console.log(response);
      this.clear();
    }
    else {
      alert('Faltan campos por completar')
    }
  }
  uploadImageCarousel($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/Home/carousel1/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages();
        alert("Subido correctamente");
      })
      .catch(error => console.log(error));

  }
  uploadImageCarousel2($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/Home/carousel1/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages();
        alert("Subido correctamente");
      })
      .catch(error => console.log(error));

  }
  uploadImageCarousel3($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/Home/carousel1/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages();
        alert("Subido correctamente");
      })
      .catch(error => console.log(error));

  }
  // carousel2 
  uploadImageCarousel4($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/Home/carousel2/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages();
        alert("Subido correctamente");
      })
      .catch(error => console.log(error));

  }
  uploadImageCarousel5($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/Home/carousel2/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages();
        alert("Subido correctamente");
      })
      .catch(error => console.log(error));

  }
  uploadImageCarousel6($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/Home/carousel2/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages();
        alert("Subido correctamente");
      })
      .catch(error => console.log(error));

  }
  uploadImageCarousel7($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/Home/carousel2/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages();
        alert("Subido correctamente");
      })
      .catch(error => console.log(error));

  }
  uploadImageCarousel8($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/Home/carousel2/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages();
        alert("Subido correctamente");
      })
      .catch(error => console.log(error));

  }
  uploadImageCarousel9($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/Home/carousel2/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages();
        alert("Subido correctamente");
      })
      .catch(error => console.log(error));

  }
  uploadImageCarousel10($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/Home/carousel2/${file.name}`);

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


  // Selección Top

  async trakePictureTop() {
    const dataUrl = (await this.placesService.trakePictureTop('Imagen del Producto')).dataUrl;
    this.formularioTop.controls['pictureTop'].setValue(dataUrl)
  }

  async onClickDeleteTop(placesTop: PlaceTop) {
    const response = await this.placesService.deleteProductTop(placesTop);
    console.log(response);
  }
  clearTop() {
    this.formularioTop.reset();
  }
  async onSubmitTop() {
    console.log(this.formularioTop.value)
    if (this.formularioTop.value.nameTop && this.formularioTop.value.pictureTop && this.formularioTop.value.priceTop && this.formularioTop.value.ratingTop && this.formularioTop.value.commentsTop) {
      const response = await this.placesService.addPlaceTop(this.formularioTop.value);
      console.log(response);
      this.clearTop();
    }
    else {
      alert('Faltan campos por completar')
    }
  }
  uploadImageTop($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `imagesTop/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages();
        alert("Subido correctamente");
      })
      .catch(error => console.log(error));

  }
  getImagesTop() {
    const imagesRef = ref(this.storage, 'imagesTop');

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


  // Selección Top Final

// Selección Top Mujer


async trakePictureTopMujer() {
  const dataUrl = (await this.placesService.trakePictureTopMujer('Imagen del Producto')).dataUrl;
  this.formularioTopMujer.controls['pictureTopMujer'].setValue(dataUrl)
}

async onClickDeleteTopMujer(placesTopMujer: PlaceTopMujer) {
  const response = await this.placesService.deleteProductTopMujer(placesTopMujer);
  console.log(response);
}
clearTopMujer() {
  this.formularioTopMujer.reset();
}
async onSubmitTopMujer() {
  console.log(this.formularioTopMujer.value)
  if (this.formularioTopMujer.value.nameTopMujer && this.formularioTopMujer.value.pictureTopMujer && this.formularioTopMujer.value.priceTopMujer && this.formularioTopMujer.value.ratingTopMujer && this.formularioTopMujer.value.commentsTopMujer) {
    const response = await this.placesService.addPlaceTopMujer(this.formularioTopMujer.value);
    console.log(response);
    this.clearTopMujer();
  }
  else {
    alert('Faltan campos por completar')
  }
}
uploadImageTopMujer($event: any) {
  const file = $event.target.files[0];
  console.log(file);

  const imgRef = ref(this.storage, `imagesTopMujer/${file.name}`);

  uploadBytes(imgRef, file)
    .then(response => {
      console.log(response)
      this.getImages();
      alert("Subido correctamente");
    })
    .catch(error => console.log(error));

}
getImagesTopMujer() {
  const imagesRef = ref(this.storage, 'imagesTopMujer');

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

//// Final Top mujer
}
