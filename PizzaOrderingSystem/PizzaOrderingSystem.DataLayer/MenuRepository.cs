using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PizzaOrderingSystem.DataModel;
using System.IO;
using Newtonsoft.Json;

namespace PizzaOrderingSystem.DataLayer
{
    public class MenuRepository : Interfaces.IMenuRepository
    {
        public List<Menu> GetMenuList()
        {
            string path = PizzaOrderingSystem.Common.Common.GetDbPath() + "Menu.json";
            var jsonString = PizzaOrderingSystem.Common.Common.ReadFile(path);
            List<Menu> menuList = JsonConvert.DeserializeObject<List<Menu>>(jsonString);
            return menuList;
        }
    }
}
