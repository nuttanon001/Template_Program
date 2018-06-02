using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace Template_Program.Models
{
    public class Diagnoses:BaseModel
    {
        [Key]
        public int DiagnosisId { get; set; }
        [StringLength(250)]
        public string Description { get; set; }
        [StringLength(250)]
        public string Remark { get; set; }
        //Relation
        public virtual PetHaveDiagnosis PetHaveDiagnosis { get; set; }

    }
}
