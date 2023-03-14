import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { MaterialModule } from './module/material.module';
import { InputTextFieldComponent } from './component/text-field/input-text-field/input-text-field.component';
import { OutputTextFieldComponent } from './component/text-field/output-text-field/output-text-field.component';
import { IconButtonComponent } from './component/button/icon-button/icon-button.component';
import { RaisedButtonComponent } from './component/button/raised-button/raised-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    InputTextFieldComponent,
    OutputTextFieldComponent,
    IconButtonComponent,
    RaisedButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    MaterialModule, // contains exports of angular material modules
    ReactiveFormsModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
