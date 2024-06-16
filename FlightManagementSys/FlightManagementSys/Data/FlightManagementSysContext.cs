using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FlightManagementSys.Models;

namespace FlightManagementSys.Data
{
    public class FlightManagementSysContext : DbContext
    {
        public FlightManagementSysContext (DbContextOptions<FlightManagementSysContext> options)
            : base(options)
        {
        }

        public DbSet<FlightManagementSys.Models.Flight> Flight { get; set; } = default!;
                public DbSet<User> Users { get; set; }

    }
}
