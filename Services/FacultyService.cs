using Module5.Abstractions;
using Module5.Data;
using Module5.Data.Model;
using Module5.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module5.Services
{
    public class FacultyService : IFacultyService
    {
        

        private readonly ApplicationContext _ctx;
        public FacultyService(ApplicationContext ctx)
        {
            _ctx = ctx;
        }

        public IEnumerable<FacultyViewModel> GetAll()
        {
            var faculties = _ctx.Faculties;
            var viewModel = faculties.Select(t => new FacultyViewModel { Id = t.Id, Title = t.Title, Budget = t.Budget }).ToList();
            return viewModel;
          
        }

        public void Create(FacultyViewModel facultyViewModel)
        {
            var faculty = new Faculty
            {
                Title = facultyViewModel.Title,
                Budget = facultyViewModel.Budget
            };
            _ctx.Faculties.Add(faculty);
            _ctx.SaveChanges();
        }

        public void Update( FacultyViewModel facultyViewModel)
        {
            var current = _ctx.Faculties.FirstOrDefault(t => t.Id == facultyViewModel.Id);
            if (current == null)
            {
                return;
            }
            current.Title = facultyViewModel.Title;
            current.Budget = facultyViewModel.Budget;
            _ctx.SaveChanges();
        }

        public void Delete(int id)
        {
            _ctx.Faculties.RemoveRange(_ctx.Faculties.FirstOrDefault(e => e.Id == id));
            _ctx.SaveChanges();
        }
    }
}


