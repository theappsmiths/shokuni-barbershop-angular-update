import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';

import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import  { ShowErrorsComponent } from '../../components/show-errors/show-errors.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { AuthService } from '../../services/auth/auth.service';

const route:Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'forget-password',
  component: ForgetPasswordComponent
}, {
  path: 'signup',
  component: SignUpComponent
}];

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    RouterModule.forChild (route)
  ],
  exports: [RouterModule],
  declarations: [
    LoginComponent, 
    ShowErrorsComponent, ForgetPasswordComponent, SignUpComponent
  ],
  providers: [AuthService]
})
export class AuthModule { }
