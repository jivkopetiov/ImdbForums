using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;

namespace ImdbForums2
{
    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            RouteTable.Routes.MapPageRoute("boards", "boards", "~/Default.aspx", false);
            RouteTable.Routes.MapPageRoute("board", "boards/{boardId}/threads", "~/Default.aspx", false);
            RouteTable.Routes.MapPageRoute("threads", "boards/{boardId}/threads/{threadId}/posts", "~/Default.aspx", false);
        }
    }
}