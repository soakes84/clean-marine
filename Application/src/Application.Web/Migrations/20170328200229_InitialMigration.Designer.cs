using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Application.Web.Data;

namespace Application.Web.Migrations
{
    [DbContext(typeof(CleanMarineContext))]
    [Migration("20170328200229_InitialMigration")]
    partial class InitialMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1");

            modelBuilder.Entity("Application.Web.Data.AluminumCanTotal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("Latitude");

                    b.Property<double>("Longitude");

                    b.Property<string>("OwnerId");

                    b.Property<DateTime>("TimeStamp");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("AluminumCanTotal");
                });

            modelBuilder.Entity("Application.Web.Data.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Application.Web.Data.CigTotal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("Latitude");

                    b.Property<double>("Longitude");

                    b.Property<string>("OwnerId");

                    b.Property<DateTime>("TimeStamp");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("CigTotal");
                });

            modelBuilder.Entity("Application.Web.Data.CleanUp", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("Latitude");

                    b.Property<double>("Longitude");

                    b.Property<string>("OwnerId");

                    b.Property<int>("Quantity");

                    b.Property<DateTime>("TimeStamp");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("CleanUp");
                });

            modelBuilder.Entity("Application.Web.Data.ClothingTotal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("Latitude");

                    b.Property<double>("Longitude");

                    b.Property<string>("OwnerId");

                    b.Property<DateTime>("TimeStamp");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("ClothingTotal");
                });

            modelBuilder.Entity("Application.Web.Data.Debris", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ApplicationUserId");

                    b.Property<int?>("CleanUpId");

                    b.Property<int?>("DebrisId");

                    b.Property<double>("Latitude");

                    b.Property<double>("Longitude");

                    b.Property<int>("Quantity");

                    b.Property<DateTime>("TimeStamp");

                    b.Property<string>("Type");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("ApplicationUserId");

                    b.HasIndex("CleanUpId");

                    b.HasIndex("DebrisId");

                    b.ToTable("Debris");
                });

            modelBuilder.Entity("Application.Web.Data.MiscellaneousTotal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("Latitude");

                    b.Property<double>("Longitude");

                    b.Property<string>("OwnerId");

                    b.Property<DateTime>("TimeStamp");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("MiscellaneousTotal");
                });

            modelBuilder.Entity("Application.Web.Data.PlasticBagTotal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("Latitude");

                    b.Property<double>("Longitude");

                    b.Property<string>("OwnerId");

                    b.Property<DateTime>("TimeStamp");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("PlasticBagTotal");
                });

            modelBuilder.Entity("Application.Web.Data.PlasticBottleTotal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("Latitude");

                    b.Property<double>("Longitude");

                    b.Property<string>("OwnerId");

                    b.Property<DateTime>("TimeStamp");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("PlasticBottleTotal");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("RoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("UserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("UserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("UserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("UserTokens");
                });

            modelBuilder.Entity("Application.Web.Data.AluminumCanTotal", b =>
                {
                    b.HasOne("Application.Web.Data.ApplicationUser", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId");
                });

            modelBuilder.Entity("Application.Web.Data.CigTotal", b =>
                {
                    b.HasOne("Application.Web.Data.ApplicationUser", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId");
                });

            modelBuilder.Entity("Application.Web.Data.CleanUp", b =>
                {
                    b.HasOne("Application.Web.Data.ApplicationUser", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId");
                });

            modelBuilder.Entity("Application.Web.Data.ClothingTotal", b =>
                {
                    b.HasOne("Application.Web.Data.ApplicationUser", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId");
                });

            modelBuilder.Entity("Application.Web.Data.Debris", b =>
                {
                    b.HasOne("Application.Web.Data.ApplicationUser")
                        .WithMany("Debris")
                        .HasForeignKey("ApplicationUserId");

                    b.HasOne("Application.Web.Data.CleanUp")
                        .WithMany("Debris")
                        .HasForeignKey("CleanUpId");

                    b.HasOne("Application.Web.Data.Debris")
                        .WithMany("debris")
                        .HasForeignKey("DebrisId");
                });

            modelBuilder.Entity("Application.Web.Data.MiscellaneousTotal", b =>
                {
                    b.HasOne("Application.Web.Data.ApplicationUser", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId");
                });

            modelBuilder.Entity("Application.Web.Data.PlasticBagTotal", b =>
                {
                    b.HasOne("Application.Web.Data.ApplicationUser", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId");
                });

            modelBuilder.Entity("Application.Web.Data.PlasticBottleTotal", b =>
                {
                    b.HasOne("Application.Web.Data.ApplicationUser", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole")
                        .WithMany("Claims")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Application.Web.Data.ApplicationUser")
                        .WithMany("Claims")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Application.Web.Data.ApplicationUser")
                        .WithMany("Logins")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Application.Web.Data.ApplicationUser")
                        .WithMany("Roles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
