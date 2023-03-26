using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_Hotel.Migrations
{
    /// <inheritdoc />
    public partial class books : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_Users_customerId",
                table: "Bookings");

            migrationBuilder.RenameColumn(
                name: "customerId",
                table: "Bookings",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Bookings",
                newName: "UserName");

            migrationBuilder.RenameIndex(
                name: "IX_Bookings_customerId",
                table: "Bookings",
                newName: "IX_Bookings_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_Users_UserId",
                table: "Bookings",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_Users_UserId",
                table: "Bookings");

            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "Bookings",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Bookings",
                newName: "customerId");

            migrationBuilder.RenameIndex(
                name: "IX_Bookings_UserId",
                table: "Bookings",
                newName: "IX_Bookings_customerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_Users_customerId",
                table: "Bookings",
                column: "customerId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
