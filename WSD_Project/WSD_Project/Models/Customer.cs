using System.ComponentModel.DataAnnotations;

namespace WSD_Project.Models
{
    public class Customer
    {
        [Key]
        public int cust_id { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? Email { get; set; }
        [Required]
        public int mobile { get; set; }
        [Required]
        public string? address { get; set; }
        [Required]
        public string? city { get; set; }
        [Required]
        public string? State { get; set; }

    }
}
