using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaOrderingSystem.DataModel
{
    public class Order
    {
        public string OrderId { get; set; }
        public List<Menu> Item { get; set; }
        public string Type  { get; set; }
        public string Status { get; set; }
        public decimal Total { get; set; }
                                           
    }
}
