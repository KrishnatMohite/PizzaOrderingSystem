using System.Web.Http;
using Unity;
using Unity.WebApi;
using PizzaOrderingSystem.BusinessLayer;
using PizzaOrderingSystem.BusinessLayer.Interface;
using PizzaOrderingSystem.DataLayer;
using PizzaOrderingSystem.DataLayer.Interfaces;

namespace PizzaOrderingSystem
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            // register all your components with the container here
            // it is NOT necessary to register your controllers
            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<IMenuManager, MenuManager>();
            container.RegisterType<IMenuRepository, MenuRepository>();
            container.RegisterType<IIngredientManager, IngredientManager>();
            container.RegisterType<IIngredientRepository, IngredientRepository>();
            container.RegisterType<IOrderManager, OrderManager>();
            container.RegisterType<IOrderRepository, OrderRepository>();
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}