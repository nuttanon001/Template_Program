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
    public class CustomerController : GenericController<Customer>
    {
        public CustomerController(IRepository<Customer> repo,
          IMapper mapper) : base(repo, mapper) { }

        // POST: api/Customer/GetScroll
        [HttpPost("GetScroll")]
        public async Task<IActionResult> GetScroll([FromBody] ScrollViewModel Scroll)
        {
            if (Scroll == null)
                return BadRequest();

            var QueryData = this.repository.GetAllAsQueryable()
                                //.AsNoTracking() Error EF-Core 2.1 Preview2
                                .AsQueryable();

            // Filter
            var filters = string.IsNullOrEmpty(Scroll.Filter) ? new string[] { "" }
                                : Scroll.Filter.ToLower().Split(null);

            foreach (var keyword in filters)
            {
                QueryData = QueryData.Where(x => x.FirstName.ToLower().Contains(keyword) ||
                                                 x.LastName.ToLower().Contains(keyword) ||
                                                 x.PhoneNo.ToLower().Contains(keyword) ||
                                                 x.Remark.ToLower().Contains(keyword) ||
                                                 x.Address.ToLower().Contains(keyword) ||
                                                 x.Address2.ToLower().Contains(keyword));
            }
            // Order
            switch (Scroll.SortField)
            {
                case "Name":
                    if (Scroll.SortOrder == -1)
                        QueryData = QueryData.OrderByDescending(e => e.FirstName).ThenByDescending(e => e.LastName);
                    else
                        QueryData = QueryData.OrderBy(e => e.FirstName).ThenBy(e => e.LastName);
                    break;
                case "PhoneNo":
                    if (Scroll.SortOrder == -1)
                        QueryData = QueryData.OrderByDescending(e => e.PhoneNo);
                    else
                        QueryData = QueryData.OrderBy(e => e.PhoneNo);
                    break;
                case "Address":
                    if (Scroll.SortOrder == -1)
                        QueryData = QueryData.OrderByDescending(e => e.PhoneNo);
                    else
                        QueryData = QueryData.OrderBy(e => e.PhoneNo);
                    break;
                default:
                    QueryData = QueryData.OrderBy(e => e.FirstName).ThenBy(e => e.LastName);
                    break;
            }
            // Get TotalRow
            Scroll.TotalRow = await QueryData.CountAsync();
            // Skip Take
            QueryData = QueryData.Skip(Scroll.Skip ?? 0).Take(Scroll.Take ?? 50);
            // Mapper
            var HasMapper = new List<CustomerViewModel>();
            foreach (var item in await QueryData.ToListAsync())
                HasMapper.Add(this.mapper.Map<Customer, CustomerViewModel>(item));

            return new JsonResult(
                new ScrollDataViewModel<CustomerViewModel>(Scroll,HasMapper), this.DefaultJsonSettings);
        }
    }
}

