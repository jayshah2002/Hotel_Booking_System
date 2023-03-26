using System.ComponentModel.DataAnnotations;

namespace Project_Hotel.Model
{
    public class Booking
    {
        [Key]
        public int BookId { get; set; }
        public string? UserName { get; set; }
        //public int Id { get; set; }
        //public User? customer { get; set; }
        public int noOfPersons { get; set; }
        public DateTime? Checkin { get; set; }

        public DateTime? Checkout { get; set; }

        public string? Room_type { get; set; }

    }
}
