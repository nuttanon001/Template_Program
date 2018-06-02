using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace Template_Program.Models
{
    public class Medicines:BaseModel
    {
        [Key]
        public int MedicineId { get; set; }
        [StringLength(250)]
        public string MedicineClass { get; set; }
        [StringLength(250)]
        public string Name { get; set; }
        [StringLength(250)]
        public string Description { get; set; }
        [StringLength(250)]
        public string Remark { get; set; }
    }
}
