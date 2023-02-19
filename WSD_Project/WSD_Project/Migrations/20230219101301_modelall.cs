using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WSD_Project.Migrations
{
    /// <inheritdoc />
    public partial class modelall : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Rooms",
                columns: table => new
                {
                    Room_no = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rooms", x => x.Room_no);
                });

            migrationBuilder.CreateTable(
                name: "Bookings",
                columns: table => new
                {
                    BookId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cust_id = table.Column<int>(type: "int", nullable: false),
                    customercust_id = table.Column<int>(type: "int", nullable: true),
                    noOfPersons = table.Column<int>(type: "int", nullable: false),
                    Checkin = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Checkout = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Room_no = table.Column<int>(type: "int", nullable: false),
                    roomtypeRoom_no = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bookings", x => x.BookId);
                    table.ForeignKey(
                        name: "FK_Bookings_Customers_customercust_id",
                        column: x => x.customercust_id,
                        principalTable: "Customers",
                        principalColumn: "cust_id");
                    table.ForeignKey(
                        name: "FK_Bookings_Rooms_roomtypeRoom_no",
                        column: x => x.roomtypeRoom_no,
                        principalTable: "Rooms",
                        principalColumn: "Room_no");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_customercust_id",
                table: "Bookings",
                column: "customercust_id");

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_roomtypeRoom_no",
                table: "Bookings",
                column: "roomtypeRoom_no");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Bookings");

            migrationBuilder.DropTable(
                name: "Rooms");
        }
    }
}
