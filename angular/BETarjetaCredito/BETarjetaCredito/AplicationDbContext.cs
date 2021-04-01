using BETarjetaCredito.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BETarjetaCredito
{
    public class AplicationDbContext: DbContext
    {
        
        DbSet<TarjetaCredito> TarjetaCredito { get; set; }

        public AplicationDbContext(DbContextOptions<AplicationDbContext> options): base(options) 
        {
        
        }
    }
}
