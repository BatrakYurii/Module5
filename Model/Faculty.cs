using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Module5.Data.Model
{
    public class Faculty
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public decimal Budget { get; set; }
        public List<Subject> Subjects = new List<Subject>();
    }
}
