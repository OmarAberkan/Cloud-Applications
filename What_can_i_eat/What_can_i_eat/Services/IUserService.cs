using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test.Data;
using test.Models;

namespace test.Services
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        IEnumerable<User> GetAll();
        User GetById(int id);
        User Create(User user, string password);
        void Update(User user, string password = null);
        void Delete(int id);
    }
    public class UserService : IUserService
    {
        private UserContext _context;
        public UserService(UserContext data)
        {
            _context = data;
        }
        public User Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;
            var user = _context.Users.SingleOrDefault(x => x.Username == username);
            if (user == null)
                return null;
            if (!VerifyPassword(password, user.Password))
                return null;
            return user;
        }
        

        public User Create(User user, string password)
        {
            if (string.IsNullOrWhiteSpace(password))
                throw new Exception("Password is required");

            if (_context.Users.Any(x => x.Username == user.Username))
                throw new Exception("Username " + user.Username + " is already taken");

            user.Password = password; 

            _context.Users.Add(user);
            _context.SaveChanges();

            return user;
        }

        public void Delete(int id)
        {
            var user = _context.Users.Find(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users;
        }

        public User GetById(int id)
        {
            return _context.Users.Find(id);
        }

        public void Update(User user, string password = null)
        {
            throw new NotImplementedException();
        }
        private static bool VerifyPassword(string password, string pass)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            if (password != pass)
            {
                return false;
            }

            return true;
        }
    }
}

