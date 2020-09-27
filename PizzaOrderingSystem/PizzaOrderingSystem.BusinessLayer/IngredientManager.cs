using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PizzaOrderingSystem.DataModel;
using PizzaOrderingSystem.BusinessLayer.Interface;
using PizzaOrderingSystem.DataLayer.Interfaces;

namespace PizzaOrderingSystem.BusinessLayer
{
    public class IngredientManager : IIngredientManager
    {
        private IIngredientRepository _ingredientRepository;
        public IngredientManager(IIngredientRepository ingredientRepository)
        {
            _ingredientRepository = ingredientRepository;
        }
        public List<Ingredient> GetIngredient()
        {
            return _ingredientRepository.GetIngredient();
        }
    }
}
