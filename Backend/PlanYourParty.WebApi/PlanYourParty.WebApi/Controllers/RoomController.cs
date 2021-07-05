using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PlanYourParty.WebApi.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlanYourParty.WebApi.Controllers
{
    [ApiController]
    [Route("/rooms")]
    public class RoomController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<RoomController> _logger;

        public RoomController(ILogger<RoomController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("/getRoomById")]
        public Room GetRoomById(int id)
        {
            return new Room()
            {
                Description = "Test",
                Id = id,
                Owner = new Owner() { Id = 1, AuthorizationLevel = 1, Password = "Bla", Username = "Blabla" },
                Name = "Erster Raum",
                Timemarks = null,
                Users = null
            };
        }
    }
}
