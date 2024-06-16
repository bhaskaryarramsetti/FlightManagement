import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/Auth/register/register/register.component';
import { LoginComponent } from './components/Auth/login/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { ShowFlightComponent } from './components/flight/show-flight/show-flight.component';
import { AddFlightComponent } from './components/flight/add-flight/add-flight.component';
import { EditFlightComponent } from './components/flight/edit-flight/edit-flight.component';

const routes: Routes = [

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:"flights",
    component:ShowFlightComponent
  },
  {
    path:"flights/add",
  component:AddFlightComponent
},
  {
    path:"flights/edit/:id",
  component:EditFlightComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
