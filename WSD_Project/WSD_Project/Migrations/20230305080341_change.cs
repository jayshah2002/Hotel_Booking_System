using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WSD_Project.Migrations
{
    /// <inheritdoc />
    public partial class change : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Room_type",
                table: "Bookings",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "cust_id1",
                table: "Bookings",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_cust_id1",
                table: "Bookings",
                column: "cust_id1");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_Customers_cust_id1",
                table: "Bookings",
                column: "cust_id1",
                principalTable: "Customers",
                principalColumn: "cust_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_Customers_cust_id1",
                table: "Bookings");

            migrationBuilder.DropIndex(
                name: "IX_Bookings_cust_id1",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "Room_type",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "cust_id1",
                table: "Bookings");
        }
    }
}
