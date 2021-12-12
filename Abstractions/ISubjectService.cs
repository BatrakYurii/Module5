using Module5.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module5.Abstractions
{
    public interface ISubjectService
    {
        public IEnumerable<SubjectViewModel> GetAll(int id);
        public void Create(SubjectViewModel subjectViewModel);
        public void Update(int deleteId, SubjectViewModel subjectViewModel);
        public void Delete(int id);
    }
}
