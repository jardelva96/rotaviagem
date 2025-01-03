using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RotaViagemAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateRotaModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Nome",
                table: "Rotas",
                newName: "Origem");

            migrationBuilder.RenameColumn(
                name: "Descricao",
                table: "Rotas",
                newName: "Destino");

            migrationBuilder.AddColumn<int>(
                name: "Valor",
                table: "Rotas",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Valor",
                table: "Rotas");

            migrationBuilder.RenameColumn(
                name: "Origem",
                table: "Rotas",
                newName: "Nome");

            migrationBuilder.RenameColumn(
                name: "Destino",
                table: "Rotas",
                newName: "Descricao");
        }
    }
}
