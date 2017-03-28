using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Web.Data
{
    public class CleanMarineContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Debris> Debris { get; set; }
        public DbSet<CigTotal> CigTotal { get; set; }
        public DbSet<PlasticBagTotal> PlasticBagTotal { get; set; }
        public DbSet<AluminumCanTotal> AluminumCanTotal { get; set; }
        public DbSet<PlasticBottleTotal> PlasticBottleTotal { get; set; }
        public DbSet<ClothingTotal> ClothingTotal { get; set; }
        public DbSet<MiscellaneousTotal> MiscellaneousTotal { get; set; }
        public DbSet<CleanUp> CleanUp { get; set; }


        public CleanMarineContext() : base()
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=CleanMarine.db");
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<ApplicationUser>()
                .ToTable("Users");
            builder.Entity<IdentityRole>()
                .ToTable("Roles");
            builder.Entity<IdentityRoleClaim<string>>()
                .ToTable("RoleClaims");
            builder.Entity<IdentityUserClaim<string>>()
                .ToTable("UserClaims");
            builder.Entity<IdentityUserLogin<string>>()
                .ToTable("UserLogins");
            builder.Entity<IdentityUserRole<string>>()
                .ToTable("UserRoles");
            builder.Entity<IdentityUserToken<string>>()
                .ToTable("UserTokens");
        }
    }
}
