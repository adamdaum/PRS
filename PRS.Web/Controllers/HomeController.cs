using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
  public IActionResult Index(){
    ViewBag.Message = "This is a test!!!";
    return View();
  }

}