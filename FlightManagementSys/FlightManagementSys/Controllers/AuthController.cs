using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FlightManagementSys.Data;
using FlightManagementSys.Models;
using FlightManagementSys.DTO;

namespace FlightManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly FlightManagementSysContext _context;

        public AuthController(FlightManagementSysContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserDTO userRegisterDTO)
        {
            if (await UserExists(userRegisterDTO.Username))
            {
                return BadRequest("Username is already taken");
            }

            var user = new User
            {
                Username = userRegisterDTO.Username,
                Password = userRegisterDTO.Password,
                Email = userRegisterDTO.Email,
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            // Optionally, you can also add member information if needed

            return Ok(new { Username = user.Username, Email = user.Email });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDTO userLoginDTO)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == userLoginDTO.Username && u.Password == userLoginDTO.Password);

            if (user == null)
            {
                return Unauthorized("Invalid username or password");
            }

            return Ok(new { Username = user.Username, Email = user.Email });
        }

        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(u => u.Username == username);
        }
    }
}
