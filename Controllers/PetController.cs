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
    public class PetController : GenericController<Pet>
    {
        // GET: api/Pet
        public PetController(IRepository<Pet> repo, IMapper mapper)
           : base(repo, mapper) { }

        // GET : api/Pet/GetByMaster
        [HttpGet("GetByMaster")]
        public async Task<IActionResult> GetByMaster(int key)
        {
            if (key > 0)
            {
                Expression<Func<Pet, bool>> expression = p => p.CustomerId == key;
                var ListEntities = await this.repository.FindAllAsync(expression);
                if (ListEntities.Any())
                    return new JsonResult(ListEntities, this.DefaultJsonSettings);
            }
            return BadRequest(new { Error = "Key not been found." });
        }

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
                QueryData = QueryData.Where(x => x.Breed.Name.ToLower().Contains(keyword) ||
                                                 x.PetName.ToLower().Contains(keyword) ||
                                                 x.Remark.ToLower().Contains(keyword));
            }
            // Order
            switch (Scroll.SortField)
            {
                case "PetName":
                    if (Scroll.SortOrder == -1)
                        QueryData = QueryData.OrderByDescending(e => e.PetName);
                    else
                        QueryData = QueryData.OrderBy(e => e.PetName);
                    break;
                case "Breed":
                    if (Scroll.SortOrder == -1)
                        QueryData = QueryData.OrderByDescending(e => e.Breed.Name);
                    else
                        QueryData = QueryData.OrderBy(e => e.Breed.Name);
                    break;
                case "Remark":
                    if (Scroll.SortOrder == -1)
                        QueryData = QueryData.OrderByDescending(e => e.Remark);
                    else
                        QueryData = QueryData.OrderBy(e => e.Remark);
                    break;
                default:
                    QueryData = QueryData.OrderBy(e => e.PetName);
                    break;
            }
            // Get TotalRow
            Scroll.TotalRow = await QueryData.CountAsync();
            // Skip Take
            QueryData = QueryData.Skip(Scroll.Skip ?? 0).Take(Scroll.Take ?? 50);
            // Mapper
            var HasMapper = new List<PetViewModel>();
            foreach (var item in await QueryData.ToListAsync())
                HasMapper.Add(this.mapper.Map<Pet, PetViewModel>(item));

            return new JsonResult(
                new ScrollDataViewModel<PetViewModel>(Scroll, HasMapper), this.DefaultJsonSettings);
        }
    }
}
