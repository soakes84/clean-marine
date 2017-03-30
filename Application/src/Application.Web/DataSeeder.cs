using Application.Web.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Web
{
    public static class DataSeeder
    {
        public static async void SeedData(this IApplicationBuilder app)
        {
            //Thanks Parker

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

                user = new ApplicationUser();
                user.Email = "b@b.com";
                user.UserName = "TreeHugger15";
                await userManager.CreateAsync(user, "Testtest1");
                debris = new Debris() { Type = "Plastic Bottle", Latitude = 32.755209, Longitude = -79.845411 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                plasticBottle = new PlasticBottleTotal() { Latitude = 32.755209, Longitude = -79.845411 };
                plasticBottle.Owner = user;
                plasticBottle.UserName = user.UserName;
                context.PlasticBottleTotal.Add(plasticBottle);
                cleanUp = new CleanUp() { Latitude = 32.755209, Longitude = -79.845411, Quantity = 0 };
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Clothing", Latitude = 32.755209, Longitude = -79.845411 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                context.Debris.Add(debris);
                clothing = new ClothingTotal() { Latitude = 32.755209, Longitude = -79.845411 };
                clothing.Owner = user;
                clothing.UserName = user.UserName;
                context.ClothingTotal.Add(clothing);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Plastic Bag", Latitude = 32.755209, Longitude = -79.845411 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                context.Debris.Add(debris);
                plasticBag = new PlasticBagTotal() { Latitude = 32.755209, Longitude = -79.845411 };
                plasticBag.Owner = user;
                plasticBag.UserName = user.UserName;
                context.PlasticBagTotal.Add(plasticBag);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Plastic Bag", Latitude = 32.755209, Longitude = -79.845411 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                context.Debris.Add(debris);
                plasticBag = new PlasticBagTotal() { Latitude = 32.755209, Longitude = -79.845411 };
                plasticBag.Owner = user;
                plasticBag.UserName = user.UserName;
                context.PlasticBagTotal.Add(plasticBag);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Plastic Bag", Latitude = 32.755209, Longitude = -79.845411 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                context.Debris.Add(debris);
                plasticBag = new PlasticBagTotal() { Latitude = 32.755209, Longitude = -79.845411 };
                plasticBag.Owner = user;
                plasticBag.UserName = user.UserName;
                context.PlasticBagTotal.Add(plasticBag);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);
                context.CleanUp.Add(cleanUp);

                user = new ApplicationUser();
                user.Email = "m@b.com";
                user.UserName = "TheIronYard";
                await userManager.CreateAsync(user, "Testtest1");
                debris = new Debris() { Type = "Plastic Bottle", Latitude = 32.781624, Longitude = -79.795458 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                plasticBottle = new PlasticBottleTotal() { Latitude = 32.781624, Longitude = -79.795458 };
                plasticBottle.Owner = user;
                plasticBottle.UserName = user.UserName;
                context.PlasticBottleTotal.Add(plasticBottle);
                cleanUp = new CleanUp() { Latitude = 32.781624, Longitude = -79.795458, Quantity = 0 };
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);
                context.CleanUp.Add(cleanUp);

                debris = new Debris() { Type = "Clothing", Latitude = 32.781624, Longitude = -79.795458 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                context.Debris.Add(debris);
                clothing = new ClothingTotal() { Latitude = 32.781624, Longitude = -79.795458 };
                clothing.Owner = user;
                clothing.UserName = user.UserName;
                context.ClothingTotal.Add(clothing);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Plastic Bag", Latitude = 32.781624, Longitude = -79.795458 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                context.Debris.Add(debris);
                plasticBag = new PlasticBagTotal() { Latitude = 32.781624, Longitude = -79.795458 };
                plasticBag.Owner = user;
                plasticBag.UserName = user.UserName;
                context.PlasticBagTotal.Add(plasticBag);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Plastic Bag", Latitude = 32.781624, Longitude = -79.795458 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                context.Debris.Add(debris);
                plasticBag = new PlasticBagTotal() { Latitude = 32.781624, Longitude = -79.795458 };
                plasticBag.Owner = user;
                plasticBag.UserName = user.UserName;
                context.PlasticBagTotal.Add(plasticBag);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Plastic Bag", Latitude = 32.781624, Longitude = -79.795458 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                context.Debris.Add(debris);
                plasticBag = new PlasticBagTotal() { Latitude = 32.781624, Longitude = -79.795458 };
                plasticBag.Owner = user;
                plasticBag.UserName = user.UserName;
                context.PlasticBagTotal.Add(plasticBag);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Aluminum Can", Latitude = 32.781624, Longitude = -79.795458 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                alumCan = new AluminumCanTotal() { Latitude = 32.781624, Longitude = -79.795458 };
                alumCan.Owner = user;
                alumCan.UserName = user.UserName;
                context.AluminumCanTotal.Add(alumCan);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Plastic Bag", Latitude = 32.781624, Longitude = -79.795458 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                context.Debris.Add(debris);
                plasticBag = new PlasticBagTotal() { Latitude = 32.781624, Longitude = -79.795458 };
                plasticBag.Owner = user;
                plasticBag.UserName = user.UserName;
                context.PlasticBagTotal.Add(plasticBag);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Miscellaneous", Latitude = 32.781624, Longitude = -79.795458 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                context.Debris.Add(debris);
                misc = new MiscellaneousTotal() { Latitude = 32.781624, Longitude = -79.795458 };
                misc.Owner = user;
                misc.UserName = user.UserName;
                context.MiscellaneousTotal.Add(misc);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);
                context.CleanUp.Add(cleanUp);

                user = new ApplicationUser();
                user.Email = "lm@b.com";
                user.UserName = "Victory";
                await userManager.CreateAsync(user, "Testtest1");
                debris = new Debris() { Type = "Plastic Bottle", Latitude = 32.646146, Longitude = -79.9583364 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                plasticBottle = new PlasticBottleTotal() {Latitude = 32.646146, Longitude = -79.9583364 };
                plasticBottle.Owner = user;
                plasticBottle.UserName = user.UserName;
                context.PlasticBottleTotal.Add(plasticBottle);
                cleanUp = new CleanUp() { Latitude = 32.646146, Longitude = -79.9583364, Quantity = 0 };
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Miscellaneous", Latitude = 32.646146, Longitude = -79.9583364 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                context.Debris.Add(debris);
                misc = new MiscellaneousTotal() { Latitude = 32.646146, Longitude = -79.9583364 };
                misc.Owner = user;
                misc.UserName = user.UserName;
                context.MiscellaneousTotal.Add(misc);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);
                context.CleanUp.Add(cleanUp);

                user = new ApplicationUser();
                user.Email = "bbb@bb.com";
                user.UserName = "Earth Savor";
                await userManager.CreateAsync(user, "Testtest1");
                debris = new Debris() { Type = "Plastic Bottle", Latitude = 32.773108, Longitude = -79.927637 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                plasticBottle = new PlasticBottleTotal() { Latitude = 32.773108, Longitude = -79.927637 };
                plasticBottle.Owner = user;
                plasticBottle.UserName = user.UserName;
                context.PlasticBottleTotal.Add(plasticBottle);
                cleanUp = new CleanUp() { Latitude = 32.773108, Longitude = -79.927637, Quantity = 0 };
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Cigarette Butt", Latitude = 32.773108, Longitude = -79.927637 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                cig = new CigTotal() { Latitude = 32.773108, Longitude = -79.927637 };
                cig.Owner = user;
                cig.UserName = user.UserName;
                context.CigTotal.Add(cig);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Cigarette Butt", Latitude = 32.773108, Longitude = -79.927637 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                cig = new CigTotal() { Latitude = 32.773108, Longitude = -79.927637 };
                cig.Owner = user;
                cig.UserName = user.UserName;
                context.CigTotal.Add(cig);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Cigarette Butt", Latitude = 32.773108, Longitude = -79.927637 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                cig = new CigTotal() { Latitude = 32.773108, Longitude = -79.927637 };
                cig.Owner = user;
                cig.UserName = user.UserName;
                context.CigTotal.Add(cig);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Cigarette Butt", Latitude = 32.773108, Longitude = -79.927637 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                cig = new CigTotal() { Latitude = 32.773108, Longitude = -79.927637 };
                cig.Owner = user;
                cig.UserName = user.UserName;
                context.CigTotal.Add(cig);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);

                debris = new Debris() { Type = "Cigarette Butt", Latitude = 32.773108, Longitude = -79.927637 };
                debris.UserName = user.UserName;
                user.Debris.Add(debris);
                cig = new CigTotal() { Latitude = 32.773108, Longitude = -79.927637 };
                cig.Owner = user;
                cig.UserName = user.UserName;
                context.CigTotal.Add(cig);
                cleanUp.UserName = debris.UserName;
                cleanUp.Quantity = (cleanUp.Quantity + 1);
                cleanUp.Debris.Add(debris);
                context.CleanUp.Add(cleanUp);

                context.SaveChanges();
            }
        }
    }
}
