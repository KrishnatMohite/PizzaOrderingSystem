using PizzaOrderingSystem.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaOrderingSystem.BusinessLayer.Interface
{
    public interface IMenuManager
    {
        List<Menu> GetMenus();
    }
}
