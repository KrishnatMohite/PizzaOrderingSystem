using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PizzaOrderingSystem.BusinessLayer.Interface;
using PizzaOrderingSystem.DataModel;
using Newtonsoft.Json.Linq;
using System.Web.Http.Cors;

namespace PizzaOrderingSystem.Controllers
{

    public class OrderController : ApiController
    {
        private IOrderManager _orderManager;
        public OrderController(IOrderManager orderManager)
        {
            _orderManager = orderManager;
        }
        /// <summary>
        /// Write order details into file
        /// </summary>
        /// <param name="order">object of order have details of items and total</param>
        /// <returns>Order object with Generated Order Id</returns>
        public Order Post(Order order)
        {
            return _orderManager.CreateOrder(order);
        }
    }
}
