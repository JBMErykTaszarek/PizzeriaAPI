using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PizzeriaAPI.Models
{
    public class Pizza
    {
        public int Id { get; set; }
        public Enums.dough dough { get; set; }
        public string IngridientsString { get; set; }
    }
}
