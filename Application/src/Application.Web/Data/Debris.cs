using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Web.Data
{
    public class Debris
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public ApplicationUser Owner { get; set; }
        public string UserName { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
    