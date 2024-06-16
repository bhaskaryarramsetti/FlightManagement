import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../Models/Flight';
import { FlightServiceService } from '../../../../services/flight-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrl: './add-flight.component.css'
})

export class AddFlightComponent implements OnInit {


  addFlightRequest:
  Flight = {
    id:0,
    flightNumber: "",
    airline: "",
    departureAirport:"",
    arrivalAirport: "",
    departureDateTime:new Date(),
    arrivalDateTime:new Date(),
    availableSeats:0,
    ticketPrice: 0
  }
constructor(private flightService:FlightServiceService,private router:Router){}
ngOnInit(): void {
  
}
addFlight(){
  console.log(this.addFlightRequest);
  this.flightService.addFlight(this.addFlightRequest)
  .subscribe({
    next:flight =>{
      alert("submitted")
      console.log(flight);
      this.router.navigate(["flights"])

    }
  });
}
}
