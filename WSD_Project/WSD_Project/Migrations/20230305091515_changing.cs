using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WSD_Project.Migrations
{
    /// <inheritdoc />
    public partial class changing : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_Customers_cust_id1",
                table: "Bookings");

            migrationBuilder.RenameColumn(
                name: "cust_id1",
                table: "Bookings",
                newName: "customercust_id");

            migrationBuilder.RenameIndex(
                name: "IX_Bookings_cust_id1",
                table: "Bookings",
                newName: "IX_Bookings_customercust_id");

            migrationBuilder.AddColumn<int>(
                name: "cust_id",
                table: "Bookings",
                type: "int",
                nullable: false,
                defaultValue: 0);

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

            migrationBuilder.DropColumn(
                name: "cust_id",
                table: "Bookings");

            migrationBuilder.RenameColumn(
                name: "customercust_id",
                table: "Bookings",
                newName: "cust_id1");

            migrationBuilder.RenameIndex(
                name: "IX_Bookings_customercust_id",
                table: "Bookings",
                newName: "IX_Bookings_cust_id1");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_Customers_cust_id1",
                table: "Bookings",
                column: "cust_id1",
                principalTable: "Customers",
                principalColumn: "cust_id");
        }
    }
}
