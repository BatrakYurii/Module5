using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Module5.Abstractions;
using Module5.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacultyController : ControllerBase
    {
        private readonly IFacultyService _facultyService;

        public FacultyController(IFacultyService facultyService)
        {
            _facultyService = facultyService;
        }

        [HttpGet]
        public IEnumerable<FacultyViewModel> GetAll()
        {
            return _facultyService.GetAll();
        }

        [HttpPost]
        public void Create(FacultyViewModel facultyViewModel)
        {
            _facultyService.Create(facultyViewModel);
        }

        [HttpPut]
        public void Update(FacultyViewModel facultyViewModel)
        {
            _facultyService.Update(facultyViewModel);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete([FromRoute] int id)
        {
            _facultyService.Delete(id);
        }
    }
}