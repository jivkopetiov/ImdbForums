using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImdbForums2.Cmd.Tests
{
    [TestFixture]
    public class ImdbScraperIntegrationTests
    {
        [Test]
        public void GetFilmThreads()
        {
            var threads = new ImdbScraper().GetFilmThreads("tt2103281");
            Assert.AreEqual(10, threads.Count);
        }
    }
}
