using RotaViagemAPI.Models;
using System.Diagnostics;

namespace RotaViagemAPI.Data
{
    public static class SeedData
    {
        public static void Initialize(RotaContext context)
        {
            Debug.WriteLine("SeedData: Verificando dados iniciais...");
            
            if (!context.Rotas.Any())
            {
                Debug.WriteLine("SeedData: Inserindo dados iniciais...");

                context.Rotas.AddRange(
                    new Rota { Origem = "GRU", Destino = "BRC", Valor = 10 },
                    new Rota { Origem = "BRC", Destino = "SCL", Valor = 5 },
                    new Rota { Origem = "GRU", Destino = "CDG", Valor = 75 },
                    new Rota { Origem = "GRU", Destino = "SCL", Valor = 20 },
                    new Rota { Origem = "GRU", Destino = "ORL", Valor = 56 },
                    new Rota { Origem = "ORL", Destino = "CDG", Valor = 5 },
                    new Rota { Origem = "SCL", Destino = "ORL", Valor = 20 }
                );

                context.SaveChanges();
                Debug.WriteLine("SeedData: Dados iniciais inseridos com sucesso.");
            }
            else
            {
                Debug.WriteLine("SeedData: Dados já existentes no banco.");
            }
        }
    }
}
