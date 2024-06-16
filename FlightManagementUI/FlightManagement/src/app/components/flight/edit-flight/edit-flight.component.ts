import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../Models/Flight';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightServiceService } from '../../../../services/flight-service.service';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrl: './edit-flight.component.css'
})

export class EditFlightComponent implements OnInit {

  flightDetails: Flight = {
    id:0,
    flightNumber: "",
    airline: "",
    departureAirport:"",
    arrivalAirport: "",
    departureDateTime:new Date(),
    arrivalDateTime:new Date(),
    availableSeats:0,
    ticketPrice: 0
  };
  
    constructor(private route: ActivatedRoute, private flightService : FlightServiceService, private router:Router){}
    ngOnInit(): void {
      const id = this.route.snapshot.params['id'];
      this.flightService.getFlight(id).subscribe({
        next: (member) => {
          this.flightDetails = member;
        }
      })
    }
    updateFlight(){
      this.flightService.updateFlight(this.flightDetails.id,this.flightDetails).subscribe({
        next: (response)=>{
          alert("updated")
          console.log(this.flightDetails)
          this.router.navigate(["flights"])
          
        }
      })
    }

    deleteFlight(id:number){
      this.flightService.deleteFlight(id)
      .subscribe({
        next:(response) => {
          alert("deleted")
          this.router.navigate(['flights']);
        }
      });
    }
  }
