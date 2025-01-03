using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using RotaViagemAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Configuração do banco de dados PostgreSQL
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<RotaContext>(options =>
    options.UseNpgsql(connectionString)
);

// Configuração de controllers
builder.Services.AddControllers();

// Configuração do Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "RotaViagem API",
        Version = "v1",
        Description = "API para gerenciamento de rotas de viagem",
        Contact = new OpenApiContact
        {
            Name = "Suporte RotaViagem",
            Email = "suporte@rotaviagem.com"
        }
    });
});

// Adicionar suporte ao CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configuração de middleware do Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "RotaViagem API v1");
        c.RoutePrefix = string.Empty;
    });
}

// Ativar CORS
app.UseCors("AllowAllOrigins");

app.UseHttpsRedirection();
app.UseAuthorization();

// Aplicar migrations e executar SeedData
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<RotaContext>();

    // Aplicar migrations
    context.Database.Migrate();

    // Executar SeedData
    SeedData.Initialize(context);
}

app.MapControllers();

app.Run();
