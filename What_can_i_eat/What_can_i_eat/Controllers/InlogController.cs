﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using test.Data;
using test.Models;
using test.Services;

namespace test.Controllers
{
    public class InlogController : Controller
    {
        private IUserService _userService;
        
        public InlogController(IUserService userService)
        {
            _userService = userService;
        }
        [AllowAnonymous]
        [HttpPost("authenticate")]
        // changed authenticate to login
        public IActionResult Login([FromBody]User loggedUser)
        {
            var user = _userService.Authenticate(loggedUser.Username, loggedUser.Password);

            if (user == null)
                return Unauthorized();

            // return basic user info (without password) and token to store client side
            return Ok(new
            {
                Id = user.Id,
                Username = user.Username,
                Name = user.Name
            });
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Register([FromBody]User userS)
        {
            try
            {
                // save 
               _userService.Create(userS, userS.Password);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var user = _userService.GetById(id);
            return Ok(user);
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
           return Ok(users);
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]User userDto)
        {
            // map dto to entity and set id
            var user = userDto;
            user.Id = id;

            try
            {
                // save 
                _userService.Update(user, userDto.Password);
                return Ok();
            }
            catch (Exception ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userService.Delete(id);
            return Ok();
        }
    }
}
