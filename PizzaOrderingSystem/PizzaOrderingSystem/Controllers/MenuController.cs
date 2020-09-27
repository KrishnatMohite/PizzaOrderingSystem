using PizzaOrderingSystem.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PizzaOrderingSystem.BusinessLayer.Interface;

namespace PizzaOrderingSystem.Controllers
{
    public class MenuController : ApiController
    {
        private IMenuManager _menuManager;
        public MenuController(IMenuManager menuManager)
        {
            _menuManager = menuManager;
        }
        /// <summary>
        /// Get the list of Menu from file
        /// </summary>
        /// <returns>List of Menu</returns>
        public List<Menu> Get()
        {
            return _menuManager.GetMenus();            
        }
    }
}
