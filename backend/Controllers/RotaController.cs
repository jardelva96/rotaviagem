using Microsoft.AspNetCore.Mvc;
using RotaViagemAPI.Data;
using RotaViagemAPI.Models;
using System.Linq;

namespace RotaViagemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RotaController : ControllerBase
    {
        private readonly RotaContext _context;

        public RotaController(RotaContext context)
        {
            _context = context;
        }

        // GET: api/Rota
        [HttpGet]
        public IActionResult GetRotas()
        {
            var rotas = _context.Rotas.ToList();
            return Ok(rotas);
        }

        // GET: api/Rota/{id}
        [HttpGet("{id}")]
        public IActionResult GetRotaById(int id)
        {
            var rota = _context.Rotas.Find(id);
            if (rota == null)
            {
                return NotFound(new { message = "Rota não encontrada." });
            }
            return Ok(rota);
        }

        // GET: api/Rota/melhorrota?origem=GRU&destino=CDG
        [HttpGet("melhorrota")]
        public IActionResult GetMelhorRota(string origem, string destino)
        {
            // Validação dos parâmetros
            if (string.IsNullOrEmpty(origem) || string.IsNullOrEmpty(destino))
            {
                return BadRequest(new { message = "Parâmetros de origem e destino são obrigatórios." });
            }

            // Busca pela melhor rota com base na origem e destino
            var rota = _context.Rotas
                .Where(r => r.Origem == origem && r.Destino == destino)
                .OrderBy(r => r.Valor) // Ordena pela rota mais barata
                .FirstOrDefault();

            // Verifica se alguma rota foi encontrada
            if (rota == null)
            {
                return NotFound(new { message = "Nenhuma rota encontrada para os parâmetros fornecidos." });
            }

            // Retorna a rota encontrada
            return Ok(new
            {
                rota = new[] { rota.Origem, rota.Destino },
                custo = rota.Valor
            });
        }

        // POST: api/Rota
        [HttpPost]
        public IActionResult CreateRota([FromBody] Rota novaRota)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Rotas.Add(novaRota);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetRotaById), new { id = novaRota.Id }, novaRota);
        }

        // PUT: api/Rota/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateRota(int id, [FromBody] Rota rotaAtualizada)
        {
            if (id != rotaAtualizada.Id)
            {
                return BadRequest(new { message = "ID da rota não corresponde." });
            }

            var rotaExistente = _context.Rotas.Find(id);
            if (rotaExistente == null)
            {
                return NotFound(new { message = "Rota não encontrada." });
            }

            rotaExistente.Origem = rotaAtualizada.Origem;
            rotaExistente.Destino = rotaAtualizada.Destino;
            rotaExistente.Valor = rotaAtualizada.Valor;

            _context.Rotas.Update(rotaExistente);
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/Rota/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteRota(int id)
        {
            var rota = _context.Rotas.Find(id);
            if (rota == null)
            {
                return NotFound(new { message = "Rota não encontrada." });
            }

            _context.Rotas.Remove(rota);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
