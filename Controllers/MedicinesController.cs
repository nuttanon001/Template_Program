using System;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

using Template_Program.Models;
using Template_Program.Services;
using Template_Program.ViewModels;

using AutoMapper;

namespace Template_Program.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class MedicinesController : GenericController<Medicines>
    {
        public MedicinesController(IRepository<Medicines> repo,IMapper mapper) 
            : base(repo, mapper) { }

        // POST: api/Medicines/GetScroll
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
                QueryData = QueryData.Where(x => x.Name.ToLower().Contains(keyword) ||
                                                 x.Description.ToLower().Contains(keyword) ||
                                                 x.Remark.ToLower().Contains(keyword));
            }
            // Order
            switch (Scroll.SortField)
            {
                case "Name":
                    if (Scroll.SortOrder == -1)
                        QueryData = QueryData.OrderByDescending(e => e.Name);
                    else
                        QueryData = QueryData.OrderBy(e => e.Name);
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
                    QueryData = QueryData.OrderBy(e => e.Name);
                    break;
            }
            // Get TotalRow
            Scroll.TotalRow = await QueryData.CountAsync();
            // Skip Take
            QueryData = QueryData.Skip(Scroll.Skip ?? 0).Take(Scroll.Take ?? 50);
            // Mapper
            var HasMapper = new List<MedicinesViewModel>();
            foreach (var item in await QueryData.ToListAsync())
                HasMapper.Add(this.mapper.Map<Medicines, MedicinesViewModel>(item));

            return new JsonResult(
                new ScrollDataViewModel<MedicinesViewModel>(Scroll, HasMapper), this.DefaultJsonSettings);
        }
    }
}
