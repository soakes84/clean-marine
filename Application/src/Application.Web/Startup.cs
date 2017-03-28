using System;
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
                var debris = new Debris() { Type = "Plastic Bottle", Latitude = 32.74567, Longitude = -79.93333 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                var plasticBottle = new PlasticBottleTotal() { Latitude = 32.74567, Longitude = -79.93333 };
                plasticBottle.Owner = user;
                plasticBottle.UserName = user.UserName;
                context.PlasticBottleTotal.Add(plasticBottle);
                var cleanUp = new CleanUp() { Latitude = 32.74567, Longitude = -79.93333, Quantity = 0 };
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Cigarette Butt", Latitude = 32.74567, Longitude = -79.93333 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                var cig = new CigTotal() { Latitude = 32.74567, Longitude = -79.93333 };
                cig.Owner = user;
                cig.UserName = user.UserName;
                context.CigTotal.Add(cig);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Aluminum Can", Latitude = 32.74567, Longitude = -79.93333 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                var alumCan = new AluminumCanTotal() { Latitude = 32.74567, Longitude = -79.93333 };
                alumCan.Owner = user;
                alumCan.UserName = user.UserName;
                context.AluminumCanTotal.Add(alumCan);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Plastic Bag", Latitude = 32.74567, Longitude = -79.93333 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                context.Debris.Add(debris);
                var plasticBag = new PlasticBagTotal() { Latitude = 32.74567, Longitude = -79.93333 };
                plasticBag.Owner = user;
                plasticBag.UserName = user.UserName;
                context.PlasticBagTotal.Add(plasticBag);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Miscellaneous", Latitude = 32.74567, Longitude = -79.93333 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                context.Debris.Add(debris);
                var misc = new MiscellaneousTotal() { Latitude = 32.74567, Longitude = -79.93333 };
                misc.Owner = user;
                misc.UserName = user.UserName;
                context.MiscellaneousTotal.Add(misc);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Clothing", Latitude = 32.74567, Longitude = -79.93333 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                context.Debris.Add(debris);
                var clothing = new ClothingTotal() { Latitude = 32.74567, Longitude = -79.93333 };
                clothing.Owner = user;
                clothing.UserName = user.UserName;
                context.ClothingTotal.Add(clothing);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                context.CleanUp.Add(cleanUp);
                context.SaveChanges();                
            }



        }

    }
}
