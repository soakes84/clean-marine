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
        [Route("~/api/debris/{id}")]
        public async Task<IActionResult> GetDebris(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = _userManager.GetUserId(User);
            Debris debris = await _context.Debris
                .SingleOrDefaultAsync(p => p.UserId == userId && p.Id == id);

            if (debris == null)
            {
                return NotFound();
            }

            return Ok(debris);

        }

        [HttpPost]
        [Route("~/api/debris")]
        public async Task<IActionResult> PostTank([FromBody] Debris debris)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            debris.Owner = await _userManager.GetUserAsync(User);
            _context.Debris.Add(debris);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTank", new { id = debris.Id }, debris);
        }

        

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
