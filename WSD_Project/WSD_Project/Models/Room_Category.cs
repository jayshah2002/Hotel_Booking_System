using System.ComponentModel.DataAnnotations;

namespace WSD_Project.Models
{
    public class Room_Category
    {
        [Key]
        public int Room_no { get; set; }

        [Required]
        public string? Room_type { get;}
    }
}
