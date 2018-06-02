using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Template_Program.Models
{
    public class PetHaveDiagnosis:BaseModel
    {
        [Key]
        public int PetHaveDiagnosisMasterId { get; set; }
        [StringLength(250)]
        public string Description { get; set; }
        [StringLength(250)]
        public string Remark { get; set; }
        public DateTime DiagnosisDate { get; set; }
        public double? Weight { get; set; }
        public double? BreathingRate { get; set; }
        public double? HeartRate { get; set; }
        public MucousMembrane? MucousMembrane { get; set; }
        public bool? HeartSound { get; set; }
        public bool? LungSound { get; set; }
        //Relation
        public int? PetId { get; set; }
        public int? DiagnosisId { get; set; }
        public virtual Diagnoses Diagnose { get; set; }
    }

    public enum MucousMembrane
    {
        VeryDarkRedGums = 1,
        PinkAndMoistGums,
        WhiteOrPaleGums,
        BlueCyanosisGums,
        YellowJaundiceGums,
        Petechia,
    }
}
