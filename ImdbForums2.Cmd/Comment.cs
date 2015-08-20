using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ImdbForums2.Cmd
{
    public class Comment
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string UserUrl { get; set; }
        public string UserImage { get; set; }
        public string UserName { get; set; }
        public DateTime Timestamp { get; set; }
        public string Body { get; set; }

        public void Dump()
        {
            Console.WriteLine(Id);
            Console.WriteLine(Title);
            Console.WriteLine(Timestamp);
            Console.WriteLine(UserName);
            Console.WriteLine(UserImage);
            Console.WriteLine(UserUrl);
            Console.WriteLine(Body);
            Console.WriteLine();
        }
    }
}
