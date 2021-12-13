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
   
    public class SubjectService : ISubjectService
    {
        private readonly ApplicationContext _ctx;
        public SubjectService(ApplicationContext ctx)
        {
            _ctx = ctx;
        }

        public void Create(SubjectViewModel subjectViewModel)
        {
                
            var subject = new Subject
            {
                Title = subjectViewModel.Title,
                Teacher = subjectViewModel.Teacher,
                FacultyId = subjectViewModel.FacultyId
            };
            _ctx.Subjects.Add(subject);
            _ctx.SaveChanges();
        }

        
        public IEnumerable<SubjectViewModel> GetAll(int facultyId)
        {
            var faculties = _ctx.Subjects.Where(f => f.FacultyId == facultyId);
            var viewModel = faculties.Select(t => new SubjectViewModel { Id = t.Id, Title = t.Title, Teacher = t.Teacher, FacultyId = t.FacultyId }).ToList();
            return viewModel;
        }

        public void Update(int deleteId, SubjectViewModel subjectViewModel)
        {
            var current = _ctx.Subjects.FirstOrDefault(t => t.Id == subjectViewModel.Id);
            if (current == null)
            {
                return;
            }
            current.Title = subjectViewModel.Title;
            current.Teacher = subjectViewModel.Teacher;
            _ctx.SaveChanges();
        }

        public void Delete(int id)
        {
            _ctx.Subjects.Remove(_ctx.Subjects.FirstOrDefault(p => p.Id == id));
            _ctx.SaveChanges();
        }
    }
}

