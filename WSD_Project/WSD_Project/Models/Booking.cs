using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WSD_Project.Models
{
    public class Booking
    {
        [Key]
        public int BookId { get; set; }
        public int cust_id{ get; set; }
        public Customer? customer { get; set; }
        public int noOfPersons { get; set; }
        public DateTime Checkin { get; set; }

        public DateTime Checkout { get; set; }

        public string? Room_type { get; set; }   
   
        
    }
}
