using Microsoft.EntityFrameworkCore;

namespace WSD_Project.Models
{
    public class CustomerDbcontext : DbContext
    {
        public CustomerDbcontext(DbContextOptions<CustomerDbcontext> options) : base(options)
        {

        }
        public DbSet<Customer> Customers { get; set; }

        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Room_Category> Rooms { get; set; }
    }
}
