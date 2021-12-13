using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    public class SubjectController : ControllerBase
    {
        private readonly ISubjectService _subjectService;

        public SubjectController(ISubjectService subjectService)
        {
            _subjectService = subjectService;
        }

        [Route("{id}")]
        [HttpGet]
        public IEnumerable<SubjectViewModel> GetAll(int id)
        {
            return _subjectService.GetAll(id);
        }


        [HttpPost]
        public void Create(SubjectViewModel subjectViewModel)
        {
            _subjectService.Create(subjectViewModel);
        }

        [HttpPut]
        public void Update(int deletedId, SubjectViewModel subjectViewModel)
        {
            _subjectService.Update(deletedId, subjectViewModel);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete([FromRoute] int id)
        {
            _subjectService.Delete(id);
        }
    }

    }

