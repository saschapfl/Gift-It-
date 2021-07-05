using System;
using System.Collections.Generic;
using System.Text;

namespace PlanYourParty.WebApi.Contracts
{
    public class Owner : User
    {
        public string Password { get; set; }
        public int AuthorizationLevel { get; set; }
    }
}
