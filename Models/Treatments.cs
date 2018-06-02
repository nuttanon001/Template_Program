using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Template_Program.Models
{
    public class Treatments:BaseModel
    {
        [Key]
        public int TreatmentId { get; set; }
        [StringLength(250)]
        public string TreatmentRegimen { get; set; }
        [StringLength(250)]
        public string Description { get; set; }
        [StringLength (250)]
        public string Remark { get; set; }
        public double? Volumes { get; set; }
        public string Uom { get; set; }
        //Relation
        public int? DiagnosisId { get; set; }
        public virtual Diagnoses Diagnoses { get; set; }
        public int? MedicineId { get; set; }
        public virtual Medicines Medicines { get; set; }
    }
}
