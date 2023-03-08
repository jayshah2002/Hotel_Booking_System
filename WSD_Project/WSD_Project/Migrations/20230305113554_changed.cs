using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WSD_Project.Migrations
{
    /// <inheritdoc />
    public partial class changed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<int>(
                name: "cust_id",
                table: "Bookings",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "cust_id",
                table: "Bookings",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

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
    }
}
