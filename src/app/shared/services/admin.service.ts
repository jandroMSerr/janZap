import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Place,PlaceTop, PlaceTopMujer,PlaceUser} from '../interfaces/admin';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  cardProducts : Place[] = [];
  _productscesta: BehaviorSubject<Place[]>;
  constructor(private firestore: Firestore) { 
    this._productscesta = new BehaviorSubject<Place[]>([]);
  }

  addUser(PlaceUser: PlaceUser) {
    const placeRef = collection(this.firestore, 'users');
    return addDoc(placeRef, PlaceUser);
  }

  // tienda 
  addNewProduct( productscesta: Place){
    this.cardProducts.push(productscesta);
    this._productscesta.next(this.cardProducts);
    
    const placeRef = collection(this.firestore, 'cesta');
    return addDoc(placeRef, productscesta);
  }

  getProduct(): Observable<Place[]> {
    const placeRef = collection(this.firestore, 'cesta');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Place[]>;
  }

  deleteProduct(place: Place) {
    const placeDocRef = doc(this.firestore, `cesta/${place.id}`);
    return deleteDoc(placeDocRef);
  }

  // Fin tienda  

  async trakePicture(promptLabelHeader: string) {
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelHeader,
      promptLabelPhoto: 'Selecciona una imagen',
      promptLabelPicture: 'Toma una foto'
    });
  };
  //PutProducto
  addPlace(place: Place) {
    const placeRef = collection(this.firestore, 'productos');
    return addDoc(placeRef, place);
  }
  //Getid
  getPlaces(): Observable<Place[]> {
    const placeRef = collection(this.firestore, 'productos');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Place[]>;
  }
  //DeleteId
  deletePlaces(place: Place) {
    const placeDocRef = doc(this.firestore, `productos/${place.id}`);
    return deleteDoc(placeDocRef);
  }

   //Tienda  Top

   async trakePictureTop(promptLabelHeader: string) {
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelHeader,
      promptLabelPhoto: 'Selecciona una imagen',
      promptLabelPicture: 'Toma una foto'
    });
  };

  addPlaceTop(PlaceTop: PlaceTop) {
    const placeRef = collection(this.firestore, 'seleccionTop');
    return addDoc(placeRef, PlaceTop);
  }

   getProductTop(): Observable<PlaceTop[]> {
    const placeRef = collection(this.firestore, 'seleccionTop');
    return collectionData(placeRef, { idField: 'id' }) as Observable<PlaceTop[]>;
  }

   deleteProductTop(placeTop: PlaceTop) {
    const placeDocRef = doc(this.firestore, `seleccionTop/${placeTop.id}`);
    return deleteDoc(placeDocRef);
  }


//Tienda  Top Mujer

async trakePictureTopMujer(promptLabelHeader: string) {
  return await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Prompt,
    promptLabelHeader,
    promptLabelPhoto: 'Selecciona una imagen',
    promptLabelPicture: 'Toma una foto'
  });
};

addPlaceTopMujer(PlaceTopMujer: PlaceTopMujer) {
  const placeRef = collection(this.firestore, 'seleccionTopMujer');
  return addDoc(placeRef, PlaceTopMujer);
}

 getProductTopMujer(): Observable<PlaceTopMujer[]> {
  const placeRef = collection(this.firestore, 'seleccionTopMujer');
  return collectionData(placeRef, { idField: 'id' }) as Observable<PlaceTopMujer[]>;
}

 deleteProductTopMujer(placeTopMujer: PlaceTopMujer) {
  const placeDocRef = doc(this.firestore, `seleccionTopMujer/${placeTopMujer.id}`);
  return deleteDoc(placeDocRef);
}
}
