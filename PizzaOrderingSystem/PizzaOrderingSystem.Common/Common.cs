using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.IO;

namespace PizzaOrderingSystem.Common
{
    public static class Common
    {        
        public static string GetDbPath()
        {
            return Convert.ToString(ConfigurationManager.AppSettings["dbpath"]);
        }

        public static string ReadFile(string path)
        {
            return File.ReadAllText(path);
        }

        public static void WriteFile(string path,string orders)
        {
            File.WriteAllText(path, orders);
        }

    }
}
