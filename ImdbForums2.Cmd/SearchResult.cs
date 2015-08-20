using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ImdbForums2.Cmd
{
    public class SearchResult
    {
        public string ImageUrl { get; set; }
        public string Text { get; set; }
        public string FilmId { get; set; }

        public void Dump()
        {
            Console.WriteLine(FilmId);
            Console.WriteLine(ImageUrl);
            Console.WriteLine(Text);
            Console.WriteLine();
        }
    }
}
