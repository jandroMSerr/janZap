import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { homeComponent } from './components/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { AdminComponent } from './components/admin/admin.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ReturnsComponent } from './components/returns/returns.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ContactComponent } from './components/contact/contact.component';
//import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'returns', component: ReturnsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'contact', component: ContactComponent },
//  { path: 'shop', component: ShopComponent },
  { path: 'home', component: homeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
