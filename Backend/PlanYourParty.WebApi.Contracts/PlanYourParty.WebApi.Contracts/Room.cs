using System;
using System.Collections.Generic;

namespace PlanYourParty.WebApi.Contracts
{
    public class Room
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public IEnumerable<DateTime> Timemarks { get; set; }
        public Owner Owner { get; set; }
        public IEnumerable<User> Users { get; set; }
    }
}
