using Microsoft.EntityFrameworkCore;
namespace Project_Hotel.Model
{
    public class HotelDBContext: DbContext
    {
        public HotelDBContext(DbContextOptions<HotelDBContext> options) : base(options)
        {
                
        }


        public DbSet<Booking> Bookings { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
