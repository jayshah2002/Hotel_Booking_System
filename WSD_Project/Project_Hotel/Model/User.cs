﻿namespace Project_Hotel.Model
{
    public class User
    {
        public int Id { get; set; }
        public string? UserName { get; set; }
        public string? Password { get; set; }
        public List<Booking>? Book { get; set; }
        public string? Name { get; set; }

        public string? Email { get; set; }

        public string? Mobile { get; set; }

        public string? Address { get; set; }

        public string? City { get; set; }

        public string? State { get; set; }
    }
}
