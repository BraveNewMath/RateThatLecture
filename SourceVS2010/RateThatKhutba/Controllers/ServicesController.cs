using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RateThatKhutba.Controllers
{
    public class ServicesController : Controller
    {
        //
        // GET: /Services/

        public String Index()
        {

            var sample = "To get list nearby locations, <a href=\"Services/near?longitude=123&latitude=456&userToken=yourToke\">go to</a>: <blockquote>" +
                "/Services/near?longitude=123&latitude=456&userToken=yourToken </blockquote>";
            return sample;
        }

        public ActionResult Near(string latitude, string longitude, string userId="NotProvided")
        {
            var sample = new Models.SampleRequest();
            var coords = new List<Models.Coords>()
                             {
                                 new Models.Coords(){ Latitude = latitude, Longitude = longitude },
                                 new Models.Coords(){ Latitude = latitude, Longitude = longitude }
                             };
            
            return Json(coords, JsonRequestBehavior.AllowGet);
        }

    }
}
