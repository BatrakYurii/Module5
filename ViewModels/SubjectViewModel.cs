using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module5.ViewModels
{
    public class SubjectViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Teacher { get; set; }
        public int FacultyId { get; set; }
        public FacultyViewModel Faculty { get; set; }
    }
}
