using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Application.Web.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Application.Web.Controllers.API
{
    [Produces("application/json")]
    public class DebrisController : Controller
    {

        private readonly CleanMarineContext _context;
        private UserManager<ApplicationUser> _userManager { get; set; }

        public DebrisController(UserManager<ApplicationUser> userManager, CleanMarineContext context)
        {
            _userManager = userManager;
            _context = context;
        }

        [HttpGet]
        [Route("~/api/debris")]
        [Authorize]
        public IEnumerable<Debris> GetUserDebris()
        {
            var userId = _userManager.GetUserId(User);
            return _context.Debris.Where(q => q.Owner.Id == userId).ToList();
        }

        [HttpGet]
        [Route("~/api/debris/all")]
        public IEnumerable<Debris> GetAllDebris()
        {
            return _context.Debris.ToList();
        }

        [HttpGet]
        [Route("~/api/debris/{id}")]
        public async Task<IActionResult> GetDebris(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = _userManager.GetUserId(User);
            Debris debris = await _context.Debris
                .SingleOrDefaultAsync(p => p.Id == id);

            if (debris == null)
            {
                return NotFound(id);
            }

            return Ok(debris);
        }

        [HttpGet]
        [Route("~/api/debris/cigtotals")]
        public IEnumerable<CigTotal> GetCigTotals()
        {
            return _context.CigTotal.ToList();
        }

        [HttpGet]
        [Route("~/api/debris/cigs")]
        [Authorize]
        public IEnumerable<CigTotal> GetUserCigDebris()
        {
            var userId = _userManager.GetUserId(User);
            return _context.CigTotal.Where(q => q.Owner.Id == userId).ToList();
        }

        [HttpGet]
        [Route("~/api/debris/plasticbagtotals")]
        public IEnumerable<PlasticBagTotal> GetPlasticBagTotals()
        {
            return _context.PlasticBagTotal.ToList();
        }

        [HttpGet]
        [Route("~/api/debris/plasticbags")]
        [Authorize]
        public IEnumerable<PlasticBagTotal> GetUserPlasticBagDebris()
        {
            var userId = _userManager.GetUserId(User);
            return _context.PlasticBagTotal.Where(q => q.Owner.Id == userId).ToList();
        }

        [HttpGet]
        [Route("~/api/debris/aluminumcantotals")]
        public IEnumerable<AluminumCanTotal> GetAluminumCanTotals()
        {
            return _context.AluminumCanTotal.ToList();
        }

        [HttpGet]
        [Route("~/api/debris/aluminumcans")]
        [Authorize]
        public IEnumerable<AluminumCanTotal> GetUserAluminumCanDebris()
        {
            var userId = _userManager.GetUserId(User);
            return _context.AluminumCanTotal.Where(q => q.Owner.Id == userId).ToList();
        }

        [HttpGet]
        [Route("~/api/debris/plasticbottletotals")]
        public IEnumerable<PlasticBottleTotal> GetPlasticBottleTotals()
        {
            return _context.PlasticBottleTotal.ToList();
        }

        [HttpGet]
        [Route("~/api/debris/plasticbottles")]
        [Authorize]
        public IEnumerable<PlasticBottleTotal> GetUserPlasticBottleDebris()
        {
            var userId = _userManager.GetUserId(User);
            return _context.PlasticBottleTotal.Where(q => q.Owner.Id == userId).ToList();
        }

        [HttpPost]
        [Route("~/api/debris")]
        [Authorize]
        public async Task<IActionResult> PostDebris([FromBody] List<Debris> debris)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _userManager.GetUserAsync(User);

            foreach (var debri in debris)
            {
                for (int i = 0; i <= debri.Quantity; i++)
                {
                    debri.Owner = user;
                    debri.UserName = user.UserName;
                    debri.TimeStamp = DateTime.UtcNow;
                    _context.Debris.Add(debri);

                    if (debri.Type == "Plastic Bottle")
                    {
                        var plasticBottle = new PlasticBottleTotal();
                        plasticBottle.Owner = user;
                        plasticBottle.UserName = user.UserName;
                        plasticBottle.TimeStamp = DateTime.UtcNow;
                        plasticBottle.Latitude = debri.Latitude;
                        plasticBottle.Longitude = debri.Longitude;
                        _context.PlasticBottleTotal.Add(plasticBottle);
                    }
                    else if (debri.Type == "Plastic Bag")
                    {
                        var plasticBag = new PlasticBagTotal();
                        plasticBag.Owner = user;
                        plasticBag.UserName = user.UserName;
                        plasticBag.TimeStamp = DateTime.UtcNow;
                        plasticBag.Latitude = debri.Latitude;
                        plasticBag.Longitude = debri.Longitude;
                        _context.PlasticBagTotal.Add(plasticBag);
                    }
                    else if (debri.Type == "Aluminum Can")
                    {
                        var alumCan = new AluminumCanTotal();
                        alumCan.Owner = user;
                        alumCan.UserName = user.UserName;
                        alumCan.TimeStamp = DateTime.UtcNow;
                        alumCan.Latitude = debri.Latitude;
                        alumCan.Longitude = debri.Longitude;
                        _context.AluminumCanTotal.Add(alumCan);
                    }
                    else if (debri.Type == "Cigarette Butt")
                    {
                        var cigButt = new CigTotal();
                        cigButt.Owner = user;
                        cigButt.UserName = user.UserName;
                        cigButt.TimeStamp = DateTime.UtcNow;
                        cigButt.Latitude = debri.Latitude;
                        cigButt.Longitude = debri.Longitude;
                        _context.CigTotal.Add(cigButt);
                    }
                }
                debri.Quantity = 0;
            }

            await _context.SaveChangesAsync();

            return Ok(debris);
        }
    }
}
