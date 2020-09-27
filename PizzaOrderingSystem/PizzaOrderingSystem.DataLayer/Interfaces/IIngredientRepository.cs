using PizzaOrderingSystem.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaOrderingSystem.DataLayer.Interfaces
{
    public interface IIngredientRepository
    {
        List<Ingredient> GetIngredient();
    }
}
