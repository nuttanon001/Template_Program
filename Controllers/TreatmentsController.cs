using System;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

using Template_Program.Services;
using Template_Program.ViewModels;
using Template_Program.Models;
using AutoMapper;

namespace Template_Program.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class TreatmentsController : GenericController<Treatments>
    {
        public TreatmentsController(IRepository<Treatments> repo, IMapper mapper)
            : base(repo, mapper) { }

        // POST: api/Treatments/GetScroll
        [HttpPost("GetScroll")]
        public async Task<IActionResult> GetScroll([FromBody] ScrollViewModel Scroll)
        {
            if (Scroll == null)
                return BadRequest();

            var QueryData = this.repository.GetAllAsQueryable()
                                .AsQueryable();

            // Filter
            var filters = string.IsNullOrEmpty(Scroll.Filter) ? new string[] { "" }
                                : Scroll.Filter.ToLower().Split(null);

            foreach (var keyword in filters)
            {
                QueryData = QueryData.Where(x => x.TreatmentRegimen.ToLower().Contains(keyword) ||
                                                 x.Medicines.Name.ToLower().Contains(keyword) ||
                                                 x.Description.ToLower().Contains(keyword) ||
                                                 x.Remark.ToLower().Contains(keyword));
            }
            // Order
            switch (Scroll.SortField)
            {
                case "TreatmentRegimen":
                    if (Scroll.SortOrder == -1)
                        QueryData = QueryData.OrderByDescending(e => e.TreatmentRegimen);
                    else
                        QueryData = QueryData.OrderBy(e => e.TreatmentRegimen);
                    break;
                case "Medicines":
                    if (Scroll.SortOrder == -1)
                        QueryData = QueryData.OrderByDescending(e => e.Medicines.Name);
                    else
                        QueryData = QueryData.OrderBy(e => e.Medicines.Name);
                    break;
                case "Description":
                    if (Scroll.SortOrder == -1)
                        QueryData = QueryData.OrderByDescending(e => e.Description);
                    else
                        QueryData = QueryData.OrderBy(e => e.Description);
                    break;
                case "Remark":
                    if (Scroll.SortOrder == -1)
                        QueryData = QueryData.OrderByDescending(e => e.Remark);
                    else
                        QueryData = QueryData.OrderBy(e => e.Remark);
                    break;
                default:
                    QueryData = QueryData.OrderBy(e => e.Medicines.Name);
                    break;
            }
            // Get TotalRow
            Scroll.TotalRow = await QueryData.CountAsync();
            // Skip Take
            QueryData = QueryData.Skip(Scroll.Skip ?? 0).Take(Scroll.Take ?? 50);
            // Mapper
            var HasMapper = new List<TreatmentsViewModel>();
            foreach (var item in await QueryData.ToListAsync())
                HasMapper.Add(this.mapper.Map<Treatments, TreatmentsViewModel>(item));

            return new JsonResult(
                new ScrollDataViewModel<TreatmentsViewModel>(Scroll, HasMapper), this.DefaultJsonSettings);
        }
    }
}
