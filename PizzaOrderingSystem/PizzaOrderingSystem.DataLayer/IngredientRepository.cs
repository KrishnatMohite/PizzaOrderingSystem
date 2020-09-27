using PizzaOrderingSystem.DataLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PizzaOrderingSystem.DataModel;
using Newtonsoft.Json;

namespace PizzaOrderingSystem.DataLayer
{
    public class IngredientRepository : IIngredientRepository
    {
        public List<Ingredient> GetIngredient()
        {
            string path = PizzaOrderingSystem.Common.Common.GetDbPath() + "Ingredient.json";
            var jsonString = PizzaOrderingSystem.Common.Common.ReadFile(path);
            List<Ingredient> ingredientList = JsonConvert.DeserializeObject<List<Ingredient>>(jsonString);
            return ingredientList;
        }
    }
}
