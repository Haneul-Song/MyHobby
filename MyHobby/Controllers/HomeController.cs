using Microsoft.AspNetCore.Mvc;
using MyHobby.Models;
using System.Diagnostics;

namespace MyHobby.Controllers
{
    public class HomeController : Controller // HomeController class that inherits controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Calculator() //decide what is going to happen when the user calls it 
        {
            return View();
        }
    }
}
