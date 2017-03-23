using System;
using FizzBuzz.Exceptions;

namespace FizzBuzz.Domain
{
    public class FizzBuzzNumber
    {
        private String value;

        public FizzBuzzNumber(String value)
        {
            this.value = value;
        }

        public String GetValue()
        {
            var number = 0;
            
            try
            {
                number = Convert.ToInt32(value);
            }
            catch
            {
                throw new NotANumberException();
            }
            if (number == 0)
                return Convert.ToString(0);

            if (number % 5 == 0 && number % 3 == 0)
                return "FizzBuzz";
            if (number % 5 == 0)
                return "Buzz";
            else if (number % 3 == 0)
                return "Fizz";

            return Convert.ToString(value);
        }
    }
}
