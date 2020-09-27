using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PizzaOrderingSystem.DataModel;

namespace PizzaOrderingSystem.DataLayer.Interfaces
{
    public interface IOrderRepository
    {
        Order CreateOrder(Order order);
    }
}
