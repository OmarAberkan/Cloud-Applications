using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test.Data;
using test.Models;

namespace What_can_i_eat.Data
{
    public class DBInitializer
    {
  
        public static void Initialize(UserContext context)
        {
            context.Database.EnsureCreated();
            if (context.Users.Any())
            {
                return;
            }
            context.Users.Add(
                new User { Email = "g", Name = "g",Password ="g" });
               
            context.SaveChanges();
        }
    }
    
}
