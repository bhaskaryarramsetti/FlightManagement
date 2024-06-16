import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../Models/Flight';
import { FlightServiceService } from '../../../../services/flight-service.service';

@Component({
  selector: 'app-show-flight',
  templateUrl: './show-flight.component.html',
  styleUrl: './show-flight.component.css'
})


export class ShowFlightComponent implements OnInit{


  flights!:Flight[]
  constructor(private flightService:FlightServiceService){

  }

  ngOnInit(): void {
    this.flightService.getAllFlight().subscribe(
      {
        next: data=>{
          this.flights=data as Flight[];
        }
      }
    )
    console.log(this.flights);
  }
}