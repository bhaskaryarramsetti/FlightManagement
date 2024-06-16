import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/Auth/login/login/login.component';
import { RegisterComponent } from './components/Auth/register/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home/home.component';
import { ShowFlightComponent } from './components/flight/show-flight/show-flight.component';
import { AddFlightComponent } from './components/flight/add-flight/add-flight.component';
import { EditFlightComponent } from './components/flight/edit-flight/edit-flight.component';
import { DeleteFlightComponent } from './components/flight/delete-flight/delete-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ShowFlightComponent,
    AddFlightComponent,
    EditFlightComponent,
    DeleteFlightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
