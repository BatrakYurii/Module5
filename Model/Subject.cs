using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Module5.Data.Model
{
    public class Subject
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Teacher { get; set; }
        public int FacultyId { get; set; }
        public Faculty Faculty { get; set; }
    }
}
