using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PizzeriaAPI.Models
{
    public class PizzeriaDbContext : DbContext
    {
        public PizzeriaDbContext(DbContextOptions<PizzeriaDbContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Pizza> Pizzas{ get; set; }
        public DbSet<Order> Orders{ get; set; }

    }
}
