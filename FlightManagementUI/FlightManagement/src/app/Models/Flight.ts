export interface Flight{

  id: number;
  flightNumber: string;
  airline: string;
  departureAirport: string;
  arrivalAirport: string;
  departureDateTime: Date;
  arrivalDateTime: Date;
  availableSeats: number;
  ticketPrice: number;

}