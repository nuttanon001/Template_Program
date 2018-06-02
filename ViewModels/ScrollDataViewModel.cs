using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Template_Program.ViewModels
{
    public class ScrollDataViewModel<TEntity> where TEntity : class
    {

        public ScrollViewModel Scroll { get; private set; }
        public IEnumerable<TEntity> Data { get; private set; }
        public ScrollDataViewModel(ScrollViewModel scroll, IEnumerable<TEntity> data)
        {
            this.Scroll = scroll;
            this.Data = data;
        }
    }
}
