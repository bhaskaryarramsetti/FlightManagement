﻿using System.ComponentModel.DataAnnotations;

namespace FlightManagementSys.Models
{
    public class Flight
    {
        [Key]
        public int Id { get; set; }
        public string FlightNumber { get; set; }
        public string Airline { get; set; }
        public string DepartureAirport { get; set; }
        public string ArrivalAirport { get; set; }
        public DateTime DepartureDateTime { get; set; }
        public DateTime ArrivalDateTime { get; set; }
        public int AvailableSeats { get; set; }
        public double TicketPrice { get; set; }
    }
}
