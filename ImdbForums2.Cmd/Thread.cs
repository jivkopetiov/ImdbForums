using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ImdbForums2.Cmd
{
    public class Thread
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public string UserUrl { get; set; }
        public string UserImage { get; set; }
        public string UserName { get; set; }
        public int RepliesCount { get; set; }
        public DateTime Timestamp { get; set; }

        public void Dump()
        {
            Console.WriteLine(Title);
            Console.WriteLine(Timestamp);
            Console.WriteLine(Url);
            Console.WriteLine(UserImage);
            Console.WriteLine(UserName);
            Console.WriteLine(UserUrl);
            Console.WriteLine(RepliesCount);
            Console.WriteLine();
        }
    }
}
