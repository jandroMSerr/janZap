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
import { ShopdetailComponent } from './components/shopdetail/shopdetail.component';
import { PurchasesummaryComponent } from './components/purchasesummary/purchasesummary.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Añadido pathMatch: 'full'
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'admin', component: AdminComponent , canActivate: [AuthGuard]},
  { path: 'shipping', component: ShippingComponent },
  { path: 'returns', component: ReturnsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shop', component: ShopdetailComponent },
  { path: 'purchasesummary', component: PurchasesummaryComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'home', component: homeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
