using Module5.Data.Model;
using Module5.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module5.Abstractions
{
    public interface IFacultyService
    {
        public IEnumerable<FacultyViewModel> GetAll();
        public void Create(FacultyViewModel faculty);
        public void Update(FacultyViewModel faculty);
        public void Delete(int id);
    }
}
