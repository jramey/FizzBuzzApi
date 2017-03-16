using System;

namespace FizzBuzz.Models
{
    public class JsonErrorModel
    {
        public Int32 StatusCode { get; set; }
        public String Detail { get; set; }
        public String Code { get; set; }
    }
}