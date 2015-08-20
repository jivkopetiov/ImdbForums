using CsQuery;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;

namespace ImdbForums2.Cmd
{
    public class ImdbScraper
    {
        public List<SearchResult> Search(string searchQuery)
        {
            string url = "http://www.imdb.com/find?q={0}&s=all".Fmt(searchQuery);

            string html = new WebClient().DownloadString(url);

            CQ dom = html;

            var searchResults = new List<SearchResult>();

            foreach (var fragment in dom.Select("table.findList tr.findResult"))
            {
                var searchResult = new SearchResult();
                searchResult.ImageUrl = fragment.Cq().Find(".primary_photo > a > img").Attr("src");
                searchResult.Text = fragment.Cq().Find(".result_text").Html();
                searchResult.Text = StringEx.RemoveHtmlTags(searchResult.Text);

                string filmUrl = fragment.Cq().Find(".result_text > a").Attr("href");
                filmUrl = filmUrl.Replace("/title/", "");
                searchResult.FilmId = filmUrl.Substring(0, filmUrl.IndexOf("/"));

                searchResults.Add(searchResult);
            }

            return searchResults;
        }


        public List<Thread> GetFilmThreads(string filmId, int? page = null)
        {
            string url = "http://www.imdb.com/title/{0}/board".Fmt(filmId);

            if (page.HasValue)
                url += "?p=" + page.Value;

            string html = new WebClient().DownloadString(url);
            CQ dom = html;
            var threadHtmlFragments = dom.Select("div.threads > div.thread");
            var threads = new List<Thread>();

            foreach (var fragment in threadHtmlFragments)
            {
                if (fragment["class"] == "thread header")
                    continue;

                var cq = fragment.Cq();

                var thread = new Thread();

                thread.Title = cq.Find(">.title a").Html();
                thread.Url = cq.Find(">.title a").Attr("href");
                thread.Id = thread.Url.Substring(thread.Url.LastIndexOf("/") + 1);
                thread.UserUrl = cq.Find(".author .user a.nickname").Attr("href");
                thread.UserImage = cq.Find(".author .user .avatar > img").Attr("src");
                thread.UserName = cq.Find(".author .user a.nickname").Html();
                thread.RepliesCount = int.Parse(cq.Find(".replies a").Html().Trim());
                thread.Timestamp = ParseDate(cq.Find(".timestamp > a > span").Attr("title"), hasSeconds: false);

                threads.Add(thread);
            }

            return threads;
        }

        private DateTime ParseDate(string value, bool hasSeconds)
        {
            string format = "ddd MMM dd yyyy HH:mm";
            if (hasSeconds)
                format += ":ss";

            Console.WriteLine(value);


            return DateTime.ParseExact(value, format, CultureInfo.InvariantCulture);
        }

        public List<Comment> GetCommentsInThread(string filmId, string threadId, int? page = null)
        {
            string url = "http://www.imdb.com/title/{0}/board/thread/{1}".Fmt(filmId, threadId);

            if (page.HasValue)
                url += "?p=" + page.Value;

            string html = new WebClient().DownloadString(url);
            CQ dom = html;
            var comments = new List<Comment>();
            foreach (var commentHtml in dom.Select(".comment"))
                comments.Add(BuildCommentFromHtml(commentHtml));

            return comments;
        }

        private Comment BuildCommentFromHtml(IDomObject fragment)
        {
            var cq = fragment.Cq();

            var avatar = cq.Select(".avatar");

            var comment = new Comment();

            comment.Id = fragment["id"].Replace("comment-", "");
            comment.Title = cq.Find(">h2").Html();
            comment.UserUrl = avatar.Attr("href");
            comment.UserImage = avatar.Select("img").Attr("src");
            comment.UserName = cq.Find(".user a").Html();
            comment.Timestamp = ParseDate(cq.Find(".timestamp a").Html(), hasSeconds: true);
            comment.Body = cq.Find(".body").Html();

            return comment;
        }
    }
}



