using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PizzaOrderingSystem.BusinessLayer.Interface;
using PizzaOrderingSystem.DataModel;

namespace PizzaOrderingSystem.Controllers
{
    public class IngredientController : ApiController
    {
        private IIngredientManager _ingredientManager;
        public IngredientController(IIngredientManager ingredientManager)
        {
            _ingredientManager = ingredientManager;
        }
        /// <summary>
        /// Get the list of Ingredient from file
        /// </summary>
        /// <returns>List of Ingredient</returns>
        public List<Ingredient> Get()
        {
            return _ingredientManager.GetIngredient();            
        }
    }
}
