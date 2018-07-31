import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './App/app.component';
import { AuthModule } from '../modules/auth/auth.module';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { SaloonModule } from '../modules/saloon/saloon.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    RouterModule.forRoot ([{
      path:'',
      component:AppComponent
    }]),
    SaloonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
