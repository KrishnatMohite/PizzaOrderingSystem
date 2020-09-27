using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PizzaOrderingSystem.DataModel;
using PizzaOrderingSystem.DataLayer.Interfaces;

namespace PizzaOrderingSystem.BusinessLayer
{
    public class OrderManager : Interface.IOrderManager
    {
        private IOrderRepository _orderRepository;
        public OrderManager(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }
        public Order CreateOrder(Order order)
        {
            order.OrderId = DateTime.Now.ToString("yyyyMMddHHmmss");
            return _orderRepository.CreateOrder(order);
        }
    }
}
