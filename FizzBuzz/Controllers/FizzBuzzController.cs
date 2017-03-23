using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FizzBuzz.Domain;
using Microsoft.AspNetCore.Cors;
using FizzBuzz.Models;
using System.Net;
using FizzBuzz.Exceptions;

namespace FizzBuzz.Controllers
{
    [EnableCors("mypolicy")]
    [Route("api/[controller]")]
    public class FizzBuzzController : Controller
    {
        [HttpPost]
        public IActionResult GetValue([FromBody]FizzBuzzModel model)
        {
            var numberValue = String.Empty;

            try
            {
                numberValue = new FizzBuzzNumber(model.Value).GetValue();
            }
            catch (NotANumberException)
            {
                Response.StatusCode = Convert.ToInt32(HttpStatusCode.BadRequest);

                return BadRequest(new JsonErrorModel()
                {
                    StatusCode = Convert.ToInt32(HttpStatusCode.BadRequest),
                    Code = "NOT_A_NUMBER",
                    Detail = "Value has to be a number"
                });
            }

            return Ok(new { value = numberValue });
        }
    }
}
