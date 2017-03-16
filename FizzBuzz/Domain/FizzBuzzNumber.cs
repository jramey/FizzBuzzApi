using System;

namespace FizzBuzz.Domain
{
    public class FizzBuzzNumber
    {
        private Int32 value;

        public FizzBuzzNumber(Int32 value)
        {
            this.value = value;
        }
        
        public String GetValue()
        {
            if (value == 0)
                return Convert.ToString(0);

            if (value % 5 == 0 && value % 3 == 0)
                return "FizzBuzz";
            if (value % 5 == 0)
                return "Buzz";
            else if (value % 3 == 0)
                return "Fizz";

            return Convert.ToString(value);
        }
    }
}
