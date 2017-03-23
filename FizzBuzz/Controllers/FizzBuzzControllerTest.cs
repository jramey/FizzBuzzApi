using FizzBuzz.Models;
using Microsoft.AspNetCore.Mvc;
using Xunit;
using Newtonsoft.Json;
using System.Reflection;
using System.Linq;
using System;

namespace FizzBuzz.Controllers
{
    public class FizzBuzzControllerTest
    {
        private FizzBuzzController controller;

        public FizzBuzzControllerTest()
        {
            controller = new FizzBuzzController();
        }

        [Fact]
        public void ControllerReturnsWordValue()
        {
            var result = controller.GetValue(new FizzBuzzModel() { Value = "1" } ) as OkObjectResult;
            dynamic model = result.Value;

            Assert.Equal("1", model.value);
        }

        [Fact]
        public void ControllerHasPostMethod()
        {
            var info = typeof(FizzBuzzController).GetMethod("GetValue");
            var customAttributes = info.GetCustomAttributes(false);

            Assert.Equal(1, customAttributes.Count());
            Assert.IsType(typeof(HttpPostAttribute), customAttributes.First());
        }
    }
}