using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WSD_Project.Models;

namespace WSD_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Room_CategoryController : ControllerBase
    {
        private readonly CustomerDbcontext _context;

        public Room_CategoryController(CustomerDbcontext context)
        {
            _context = context;
        }

        // GET: api/Room_Category
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Room_Category>>> GetRooms()
        {
            return await _context.Rooms.ToListAsync();
        }

        // GET: api/Room_Category/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Room_Category>> GetRoom_Category(int id)
        {
            var room_Category = await _context.Rooms.FindAsync(id);

            if (room_Category == null)
            {
                return NotFound();
            }

            return room_Category;
        }

        // PUT: api/Room_Category/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoom_Category(int id, Room_Category room_Category)
        {
            if (id != room_Category.Room_no)
            {
                return BadRequest();
            }

            _context.Entry(room_Category).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Room_CategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Room_Category
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Room_Category>> PostRoom_Category(Room_Category room_Category)
        {
            _context.Rooms.Add(room_Category);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRoom_Category", new { id = room_Category.Room_no }, room_Category);
        }

        // DELETE: api/Room_Category/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoom_Category(int id)
        {
            var room_Category = await _context.Rooms.FindAsync(id);
            if (room_Category == null)
            {
                return NotFound();
            }

            _context.Rooms.Remove(room_Category);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Room_CategoryExists(int id)
        {
            return _context.Rooms.Any(e => e.Room_no == id);
        }
    }
}
