﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Application.Web.Data;
using Application.Web.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Application.Web.Controllers.API
{
    [Produces("application/json")]
    public class AccountsController : Controller
    {
        public SignInManager<ApplicationUser> SignInManager { get; set; }
        public UserManager<ApplicationUser> UserManager { get; set; }

        public AccountsController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            UserManager = userManager;
            SignInManager = signInManager;
        }

        [HttpPost]
        [Route("~/api/accounts/login")]
        public async Task<IActionResult> Login([FromBody]LoginRequest model)
        {
            var user = await UserManager.FindByEmailAsync(model.Email);

            if (user != null)
            {
                var result = await SignInManager.PasswordSignInAsync(user, model.Password, false, true);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("~/api/accounts/register")]
        public async Task<IActionResult> Register([FromBody]RegisterRequest model)
        {
            var user = new ApplicationUser();
            user.Email = model.Email;
            user.UserName = model.UserName;

            var result = await UserManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }

        }

        [HttpGet]
        [Route("~/api/accounts/logout")]
        public async Task<IActionResult> Logout()
        {
            await SignInManager.SignOutAsync();

            return Ok();
        }

    }
}
