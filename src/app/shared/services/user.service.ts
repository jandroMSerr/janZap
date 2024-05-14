import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userEmailSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  userEmail$: Observable<string | null> = this.userEmailSubject.asObservable();

  private isAdminSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAdmin$: Observable<boolean> = this.isAdminSubject.asObservable();

  constructor() {}

  setUserEmail(userEmail: string | null): void {
    console.log('Correo electrónico emitido:', userEmail);
    this.userEmailSubject.next(userEmail);

    // Determina si el usuario es administrador
    const isAdmin = userEmail !== null && userEmail.includes('admin');
    this.isAdminSubject.next(isAdmin);
  }

  getUserEmail(): Observable<string | null> {
    return this.userEmail$;
  }

  getIsAdmin(): Observable<boolean> {
    return this.isAdmin$;
  }
}
