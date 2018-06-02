using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Template_Program.Models
{
    public class Customer:BaseModel
    {
        [Key]
        public int CustomerId { get; set; }
        [StringLength(250)]
        public string FirstName { get; set; }
        [StringLength(250)]
        public string LastName { get; set; }
        public string Image { get; set; }
        public Sex Sex { get; set; }
        public string Address { get; set; }
        public string Address2 { get; set; }
        public string Infomation { get; set; }
        public DateTime? BirthDate { get; set; }
        public DateTime RegisterDate { get; set; }
        public string PhoneNo { get; set; }
        public string MailAddress { get; set; }
        [StringLength(250)]
        public string Remark { get; set; }
        // Relation
        public virtual ICollection<Pet> Pets { get; set; }
    }
}
