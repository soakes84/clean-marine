using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Application.Web.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

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

        [HttpPost]
        [Route("~/api/debris")]
        public async Task<IActionResult> PostDebris([FromBody] Debris debris)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            debris.Owner = await _userManager.GetUserAsync(User);
            debris.TimeStamp = DateTime.UtcNow;
            _context.Debris.Add(debris);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDebris", new { id = debris.Id }, debris);
        }


    }
}
