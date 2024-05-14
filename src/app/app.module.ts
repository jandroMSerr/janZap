import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { homeComponent } from './components/home/home.component';
import { AngularFireModule } from '@angular/fire/compat';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ReturnsComponent } from './components/returns/returns.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopdetailComponent } from './components/shopdetail/shopdetail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { SmallcardComponent } from './components/smallcard/smallcard.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { PurchasesummaryComponent } from './components/purchasesummary/purchasesummary.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserService } from './shared/services/user.service';

defineCustomElements(window);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    homeComponent,
    ForgotpasswordComponent,
    AdminComponent,
    ShippingComponent,
    ReturnsComponent,
    QuestionsComponent,
    ContactComponent,
    ShopdetailComponent,
    NavbarComponent,
    FooterComponent,
    SmallcardComponent,
    CartButtonComponent,
    PurchasesummaryComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    

    // error solution NullInjectError
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
