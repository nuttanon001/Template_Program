using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Template_Program.Models
{
    public class Breed:BaseModel
    {
        [Key]
        public int BreedID { get; set; }
        [StringLength(50)]
        public string Name { get; set; }
        [StringLength(250)]
        public string Description { get; set; }
        // Relation
        public virtual ICollection<Pet> Pets { get; set; }
    }
}
