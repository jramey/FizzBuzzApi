using Moq;
using Xunit;
using FizzBuzz.Domain;

namespace FizzBuzz.FizzBuzzTests
{
    public class FizzBuzzTests
    {  
          [Fact]
        public void ReturnsZeroForZero()
        {
            var fizzBuzz = new FizzBuzzNumber(0);
            var result = fizzBuzz.GetValue();

            Assert.Equal("0", result);
        }

        [Fact]
        public void ReturnsOneForOne()
        {
            var fizzBuzz = new FizzBuzzNumber(1);
            var result = fizzBuzz.GetValue();

            Assert.Equal("1", result);
        }

        [Fact]
        public void ReturnsFizzForThree()
        {
            var fizzBuzz = new FizzBuzzNumber(3);
            var result = fizzBuzz.GetValue();

            Assert.Equal("Fizz", result);
        }

        [Fact]
        public void ReturnsBuzzForFive()
        {
            var fizzBuzz = new FizzBuzzNumber(5);
            var result = fizzBuzz.GetValue();

            Assert.Equal("Buzz", result);
        }

        [Fact]
        public void ReturnsFizzBuzzForFifteen()
        {
            var fizzBuzz = new FizzBuzzNumber(15);
            var result = fizzBuzz.GetValue();

            Assert.Equal("FizzBuzz", result);
        }
    }
}
