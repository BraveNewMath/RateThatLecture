using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RateThatKhutba.Models
{
    public class Address
    {
        public string Address1 { get; set; }
        public string City  { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public Coords Location { get; set; }
    }

    public class Coords
    {
        public string Longitude { get; set; }
        public string Latitude { get; set; }
    }

    public class SampleRequest
    {
        public Coords NearLocation { get; set; }
        public SampleRequest()
        {
            NearLocation = new Coords();
            NearLocation.Latitude = "123.1234";
            NearLocation.Longitude = "456.789";

        }
    }

}