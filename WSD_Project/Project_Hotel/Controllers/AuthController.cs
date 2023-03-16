using Microsoft.AspNetCore.Mvc;
using Project_Hotel.Model;
using Microsoft.EntityFrameworkCore;

namespace Project_Hotel.Controllers
{
    
        [Route("api/[controller]")]
        [ApiController]
        public class AuthController : Controller
        {
            private readonly HotelDBContext _context;
            public AuthController(HotelDBContext context)
            {
                _context = context;
            }


            [HttpPost("Login")]
            public async Task<ActionResult> Login(UserLoginDTO userDTO)
            {
                var res = await _context.Users.FirstOrDefaultAsync(u => u.UserName.ToLower() == userDTO.Username.ToLower());
                Console.WriteLine(res);
                if (res == null)
                {
                    return BadRequest($"Incorrect username or password!");
                }
                return Ok(new { token = res.Id,username=res.UserName,res.Password, status = 200 });
            }
        }
    }



