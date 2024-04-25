import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Place, Portada2, Portada3, Portada4, Portada5} from '../interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore: Firestore) { }

  addPlace(place: Place) {
    const placeRef = collection(this.firestore, 'texto1');
    return addDoc(placeRef, place);
  }

  getPlaces(): Observable<Place[]> {
    const placeRef = collection(this.firestore, 'texto1');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Place[]>;
  }

  deletePlaces(place: Place) {
    const placeDocRef = doc(this.firestore, `texto1/${place.id}`);
    return deleteDoc(placeDocRef);
  }

  // portada4

  addPortada2(portada2: Portada2) {
    const placeRef = collection(this.firestore, 'portada2');
    return addDoc(placeRef, portada2);
  }

  getPortada2(): Observable<Portada2[]> {
    const placeRef = collection(this.firestore, 'portada2');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Portada2[]>;
  }

  deletePlace2(portada2: Portada2) {
    const placeDocRef = doc(this.firestore, `portada2/${portada2.id}`);
    return deleteDoc(placeDocRef);
  }

  // portada3

  addPortada3(portada3: Portada3) {
    const placeRef = collection(this.firestore, 'portada3');
    return addDoc(placeRef, portada3);
  }

  getPortada3(): Observable<Portada3[]> {
    const placeRef = collection(this.firestore, 'portada3');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Portada3[]>;
  }

  deletePlace3(portada3: Portada3) {
    const placeDocRef = doc(this.firestore, `portada3/${portada3.id}`);
    return deleteDoc(placeDocRef);
  }

  // portada4

  addPortada4(portada4: Portada4) {
    const placeRef = collection(this.firestore, 'portada4');
    return addDoc(placeRef, portada4);
  }

  getPortada4(): Observable<Portada4[]> {
    const placeRef = collection(this.firestore, 'portada4');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Portada4[]>;
  }

  deletePlace4(portada4: Portada4) {
    const placeDocRef = doc(this.firestore, `portada4/${portada4.id}`);
    return deleteDoc(placeDocRef);
  }
  // portada5

  addPortada5(portada5: Portada5) {
    const placeRef = collection(this.firestore, 'portada5');
    return addDoc(placeRef, portada5);
  }

  getPortada5(): Observable<Portada5[]> {
    const placeRef = collection(this.firestore, 'portada5');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Portada5[]>;
  }

  deletePlace5(portada5: Portada5) {
    const placeDocRef = doc(this.firestore, `portada5/${portada5.id}`);
    return deleteDoc(placeDocRef);
  }
}
