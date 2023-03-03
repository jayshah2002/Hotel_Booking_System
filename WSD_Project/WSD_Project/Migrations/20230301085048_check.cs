using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WSD_Project.Migrations
{
    /// <inheritdoc />
    public partial class check : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_Customers_customercust_id",
                table: "Bookings");

            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_Rooms_roomtypeRoom_no",
                table: "Bookings");

            migrationBuilder.DropIndex(
                name: "IX_Bookings_customercust_id",
                table: "Bookings");

            migrationBuilder.DropIndex(
                name: "IX_Bookings_roomtypeRoom_no",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "Room_no",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "cust_id",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "customercust_id",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "roomtypeRoom_no",
                table: "Bookings");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Room_no",
                table: "Bookings",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "cust_id",
                table: "Bookings",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "customercust_id",
                table: "Bookings",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "roomtypeRoom_no",
                table: "Bookings",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_customercust_id",
                table: "Bookings",
                column: "customercust_id");

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_roomtypeRoom_no",
                table: "Bookings",
                column: "roomtypeRoom_no");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_Customers_customercust_id",
                table: "Bookings",
                column: "customercust_id",
                principalTable: "Customers",
                principalColumn: "cust_id");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_Rooms_roomtypeRoom_no",
                table: "Bookings",
                column: "roomtypeRoom_no",
                principalTable: "Rooms",
                principalColumn: "Room_no");
        }
    }
}
