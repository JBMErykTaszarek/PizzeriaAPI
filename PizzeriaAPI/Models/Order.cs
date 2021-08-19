using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PizzeriaAPI.Models
{
    public class Order
    {
        public int Id { get; set; }
        public bool Done { get; set; }
        public string PizzasCombinationString { get; set; }
    }
}
