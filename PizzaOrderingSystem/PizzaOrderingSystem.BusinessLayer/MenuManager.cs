using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PizzaOrderingSystem.DataModel;
using PizzaOrderingSystem.DataLayer.Interfaces;


namespace PizzaOrderingSystem.BusinessLayer
{
    public class MenuManager : Interface.IMenuManager
    {
        private IMenuRepository _menuRepository;
        public MenuManager(IMenuRepository menuRepository)
        {
            _menuRepository = menuRepository;
        }
        public List<Menu> GetMenus()
        {
            return _menuRepository.GetMenuList();
        }
    }
}
