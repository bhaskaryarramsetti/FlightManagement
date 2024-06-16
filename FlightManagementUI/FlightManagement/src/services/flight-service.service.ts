import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../app/Models/Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor(private http: HttpClient) { }

  getAllFlight(){
    return this.http.get<Flight[]>("https://localhost:7261/api/Flights")
  }

  addFlight(addFlightRequest: Flight){
    return this.http.post<Flight[]>("https://localhost:7261/api/Flights", addFlightRequest)
  }
  getFlight(id: string){
    return this.http.get<Flight>("https://localhost:7261/api/Flights/"+id)
  }
  updateFlight(id: number, updateFlightRequest:Flight){
    return this.http.put<Flight>("https://localhost:7261/api/Flights/"+id,updateFlightRequest)
  }
  deleteFlight(id: number){
    return this.http.delete<Flight>("https://localhost:7261/api/Flights/"+id)
  }



}
