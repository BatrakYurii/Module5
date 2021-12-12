using Microsoft.EntityFrameworkCore;
using Module5.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Module5.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
                            : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Faculty> Faculties { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
            optionsBuilder.UseSqlServer("Data Source=localhost; Initial Catalog = University; Integrated Security = true");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Faculty>()
                .HasData(
                new List<Faculty>{
                    new Faculty { Id = 1, Title="History" , Budget=15000} ,
            new Faculty { Id = 2, Title="Sience", Budget=25000 } ,
            new Faculty { Id = 3, Title="Linguistic", Budget=10000},
            new Faculty { Id = 4, Title="Lawyer", Budget=13000},
            new Faculty { Id = 5, Title="Medical", Budget = 22500}


            });

            modelBuilder.Entity<Subject>()
                .HasData(
                new List<Subject>{
                    new Subject { Id = 1, Title="History of Ukraine", Teacher="Jane Optopus", FacultyId =1 } ,
                    new Subject { Id = 2, Title="Ansient History",Teacher="MagnusCarlse", FacultyId =1 } ,
                    new Subject { Id = 3, Title="Mathematical Analysis", Teacher="Victor Hall", FacultyId=2 } ,
                    new Subject { Id = 4, Title="Physics", Teacher="Victor Hall", FacultyId=2 } ,
                    new Subject { Id = 5, Title="Ukrainian", Teacher="Ian Johnson", FacultyId=3},
                    new Subject { Id = 6, Title="Civil law", Teacher="Magnus Carlsen", FacultyId=4 },
                    new Subject { Id = 7, Title="Criminal law", Teacher="Steve Vosnic", FacultyId=4 },
                    new Subject { Id = 8, Title="Histology", Teacher="Dr. Piterson", FacultyId=5},
                    new Subject { Id = 9, Title="Anatomy", Teacher="Dr. Piterson",  FacultyId=5}
});
        }
    }
}
