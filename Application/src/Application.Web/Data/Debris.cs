﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Web.Data
{
    public class Debris
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public int UserId { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}
