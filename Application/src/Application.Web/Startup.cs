﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Application.Web.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace Application.Web
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var context = new CleanMarineContext();
            context.Database.Migrate();

            services.AddDbContext<CleanMarineContext>();

            services.AddIdentity<ApplicationUser, IdentityRole>(options =>
            {
                options.Password.RequireUppercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireDigit = false;
            })
            .AddEntityFrameworkStores<CleanMarineContext>()
            .AddDefaultTokenProviders();

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public async void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseIdentity();

            app.UseDefaultFiles();

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });



            var context = app.ApplicationServices.GetRequiredService<CleanMarineContext>();
            var userManager = app.ApplicationServices.GetRequiredService<UserManager<ApplicationUser>>();

            var user = await userManager.FindByEmailAsync("t@t.com");
            if (user == null)
            {
                user = new ApplicationUser();
                user.Email = "t@t.com";
                user.UserName = "BigTime";
                await userManager.CreateAsync(user, "Testtest1");
                var debris = new Debris() { Type = "Plastic bottle", Latitude = 32.738605, Longitude = -79.871332 };
                debris.Owner = user;
                context.Debris.Add(debris);
                debris = new Debris() { Type = "tin can", Latitude = 32.74567, Longitude = -79.93333 };
                debris.Owner = user;
                context.Debris.Add(debris);
                
            }

            //if(!context.Users.Any(r=>r.Email == user.Email))
            //{
            //    var password = new PasswordHasher<ApplicationUser>();
            //    var hashed = password.HashPassword(user, "Testtest1");
            //    user.PasswordHash = hashed;
            //    context.Add(user);
            //    context.SaveChanges();
            //}

            //var user = new ApplicationUser() { Email = "t@t.com", PasswordHash = "3fsdka3", UserName = "BigTime", Id = "123456" };
            //context.Users.Add(user);
            //var debris = new Debris() { Type = "Plastic bottle", Latitude = 32.123, Longitude = 33.333 };
            //debris.Owner = user;
            //context.Debris.Add(debris);
            //debris = new Debris() { Type = "tin can", Latitude = 13.244, Longitude = 31.34 };
            //debris.Owner = user;
            //context.Add(debris);

            //context.SaveChanges();

        }

    }
}
