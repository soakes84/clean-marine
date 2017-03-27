using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Web.Data
{
    public class MiscellaneousTotal
    {
        public int Id { get; set; }
        public ApplicationUser Owner { get; set; }
        public string UserName { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
