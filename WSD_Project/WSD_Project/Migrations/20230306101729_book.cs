using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WSD_Project.Migrations
{
    /// <inheritdoc />
    public partial class book : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "customercust_id",
                table: "Bookings",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_customercust_id",
                table: "Bookings",
                column: "customercust_id");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_Customers_customercust_id",
                table: "Bookings",
                column: "customercust_id",
                principalTable: "Customers",
                principalColumn: "cust_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_Customers_customercust_id",
                table: "Bookings");

            migrationBuilder.DropIndex(
                name: "IX_Bookings_customercust_id",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "customercust_id",
                table: "Bookings");
        }
    }
}
