using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PizzaOrderingSystem.DataModel;
using Newtonsoft.Json;

namespace PizzaOrderingSystem.DataLayer
{
    public class OrderRepository : Interfaces.IOrderRepository
    {        
        public Order CreateOrder(Order order)
        {
            string path = PizzaOrderingSystem.Common.Common.GetDbPath() + "Order.json";
            var jsonString = PizzaOrderingSystem.Common.Common.ReadFile(path);
            List<Order> orderList = JsonConvert.DeserializeObject<List<Order>>(jsonString);
            orderList.Add(order);
            string newJsonResult = Newtonsoft.Json.JsonConvert.SerializeObject(orderList,
                               Newtonsoft.Json.Formatting.Indented);

            PizzaOrderingSystem.Common.Common.WriteFile(path, newJsonResult);
            return order;
        }
    }
}
