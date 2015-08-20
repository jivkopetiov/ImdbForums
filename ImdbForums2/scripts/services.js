app.factory("boardsService", function () {

    var result = {};

    result.getAllBoards = function () {

        return [
            { id: 'need-to-know', name: "I Need To Know", category: "Trivia! Trivia!", threadCount: 29381, description: "This is the place to post those film/TV/video/etc trivia questions you DON'T know the answers to - perhaps one of your fellow users can help. " },
            { id: 'best-worst', name: "Best and Worst", category: "Trivia! Trivia!", threadCount: 7372, description: "Discussion of the best and worst that film and TV has to offer. Includes discussions on IMDb's Top 250 and Bottom 100. " },
            { id: 'lists-recommendations', name: "Lists and Recommendations", category: "Trivia! Trivia!", threadCount: 3812, description: "Create and share lists and recommendations. Post your list, and get recommendations. " },
            { id: 'movie-awards', name: "Movie Awards", category: "Awards Season", threadCount: 47821, description: "Discuss Oscar buzz, BAFTA, Golden Globes, etc. " },
            { id: 'tv-awards', name: "Television Awards", category: "Awards Season", threadCount: 2819, description: "Emmys, Golden Globes, People's Choice, etc. " },
            { id: 'music-awards', name: "Music Awards", category: "Awards Season", threadCount: 5927, description: "Discuss Grammy, CMAs, MTV, and other music awards.  " },
            { id: 'theater-awards', name: "Theater Awards", category: "Awards Season", threadCount: 1048, description: "Discuss Tony and other theater awards. " }
        ];

    };

    result.getBoardById = function (id) {
        var boards = result.getAllBoards();
        return _.find(boards, function (board) { return board.id === id; });
    };

   

    result.getThreadsForBoard = function (boardId) {
        return [

            { id: 5, boardId:'need-to-know', title: 'Worst Comedy You\'ve Seen', author: { id: 'ur33141554', name: 'telegramsam23' }, postsCount: 5, created: new Date() },
            { id: 6, boardId: 'need-to-know', title: 'What movies did you watch last week? (23/12 - 29/12) + YEAR END OVERVIEW', author: { id: 'ur33141554', name: 'telegramsam23' }, postsCount: 0, created: new Date() },
            { id: 7, boardId: 'need-to-know', title: 'Best Supp. Actress (2007)', author: { id: 'ur33141554', name: 'telegramsam23' }, postsCount: 48, created: new Date() },
                       
            { id: 8, boardId: 'need-to-know', title: 'Worst Comedy You\'ve Seen', author: { id: 'ur33141554', name: 'telegramsam23' }, postsCount: 5, created: new Date() },
            { id: 9, boardId: 'need-to-know', title: 'What movies did you watch last week? (23/12 - 29/12) + YEAR END OVERVIEW', author: { id: 'ur33141554', name: 'telegramsam23' }, postsCount: 0, created: new Date() },
            { id: 10, boardId: 'need-to-know', title: 'Best Supp. Actress (2007)', author: { id: 'ur33141554', name: 'telegramsam23' }, postsCount: 48, created: new Date() },
                       
            { id: 11, boardId: 'need-to-know', title: 'Worst Comedy You\'ve Seen', author: { id: 'ur33141554', name: 'telegramsam23' }, postsCount: 5, created: new Date() },
            { id: 12, boardId: 'need-to-know', title: 'What movies did you watch last week? (23/12 - 29/12) + YEAR END OVERVIEW', author: { id: 'ur33141554', name: 'telegramsam23' }, postsCount: 0, created: new Date() },
            { id: 13, boardId: 'need-to-know', title: 'Best Supp. Actress (2007)', author: { id: 'ur33141554', name: 'telegramsam23' }, postsCount: 48, created: new Date() },
                       
            { id: 14, boardId: 'need-to-know', title: 'Worst Comedy You\'ve Seen', author: { id: 'ur33141554', name: 'telegramsam23' }, postsCount: 5, created: new Date() },
            { id: 15, boardId: 'best-worst', title: 'What movies did you watch last week? (23/12 - 29/12) + YEAR END OVERVIEW', author: { id: 'ur33141554', name: 'telegramsam23' }, postsCount: 0, created: new Date() },
            { id: 16, boardId: 'best-worst', title: 'Best Supp. Actress (2007)', author: { id: 'ur33141554', name: 'telegramsam23' }, postsCount: 48, created: new Date() },
                       
            { id: 17, boardId: 'best-worst', title: 'Worst Comedy You\'ve Seen', author: { id: 'ur33141554', name: 'telegramsam23' }, postsCount: 5, created: new Date() },
            { id: 18, boardId: 'best-worst', title: 'What movies did you watch last week? (23/12 - 29/12) + YEAR END OVERVIEW', author: { id: 'ur33141554', name: 'telegramsam23' }, postsCount: 0, created: new Date() },
            { id: 19, boardId: 'best-worst', title: 'Best Supp. Actress (2007)', author: { id: 'ur33141554', name: 'telegramsam23' }, postsCount: 48, created: new Date() },

        ];
    };

    result.getThreadById = function (boardId, threadId) {
        var threads = result.getThreadsForBoard(boardId);
        return _.find(threads, function (thread) { return thread.id == threadId; });
    };

    result.getPostsForThread = function (threadId) {

        return [
            { id: 4, author: { id: 'ur33141554', name: 'telegramsam23' }, created: new Date(), body: '1) Viola Davis (Doubt)<br>2) Marisa Tomei (The Wrestler)<br>3) Penelope Cruz (Vicky Cristina Barcelona)' },
            { id: 4, author: { id: 'ur33141554', name: 'telegramsam23' }, created: new Date(), body: '1) Viola Davis (Doubt)<br>2) Marisa Tomei (The Wrestler)<br>3) Penelope Cruz (Vicky Cristina Barcelona)' },
            { id: 4, author: { id: 'ur33141554', name: 'telegramsam23' }, created: new Date(), body: '1) Viola Davis (Doubt)<br>2) Marisa Tomei (The Wrestler)<br>3) Penelope Cruz (Vicky Cristina Barcelona)' },
            { id: 4, author: { id: 'ur33141554', name: 'telegramsam23' }, created: new Date(), body: '1) Viola Davis (Doubt)<br>2) Marisa Tomei (The Wrestler)<br>3) Penelope Cruz (Vicky Cristina Barcelona)' },
            { id: 4, author: { id: 'ur33141554', name: 'telegramsam23' }, created: new Date(), body: '1) Viola Davis (Doubt)<br>2) Marisa Tomei (The Wrestler)<br>3) Penelope Cruz (Vicky Cristina Barcelona)' },
            { id: 4, author: { id: 'ur33141554', name: 'telegramsam23' }, created: new Date(), body: '1) Viola Davis (Doubt)<br>2) Marisa Tomei (The Wrestler)<br>3) Penelope Cruz (Vicky Cristina Barcelona)' },
            { id: 4, author: { id: 'ur33141554', name: 'telegramsam23' }, created: new Date(), body: '1) Viola Davis (Doubt)<br>2) Marisa Tomei (The Wrestler)<br>3) Penelope Cruz (Vicky Cristina Barcelona)' },
            { id: 4, author: { id: 'ur33141554', name: 'telegramsam23' }, created: new Date(), body: '1) Viola Davis (Doubt)<br>2) Marisa Tomei (The Wrestler)<br>3) Penelope Cruz (Vicky Cristina Barcelona)' },
            { id: 4, author: { id: 'ur33141554', name: 'telegramsam23' }, created: new Date(), body: '1) Viola Davis (Doubt)<br>2) Marisa Tomei (The Wrestler)<br>3) Penelope Cruz (Vicky Cristina Barcelona)' },
            { id: 4, author: { id: 'ur33141554', name: 'telegramsam23' }, created: new Date(), body: '1) Viola Davis (Doubt)<br>2) Marisa Tomei (The Wrestler)<br>3) Penelope Cruz (Vicky Cristina Barcelona)' },
            { id: 4, author: { id: 'ur33141554', name: 'telegramsam23' }, created: new Date(), body: '1) Viola Davis (Doubt)<br>2) Marisa Tomei (The Wrestler)<br>3) Penelope Cruz (Vicky Cristina Barcelona)' },
            { id: 4, author: { id: 'ur33141554', name: 'telegramsam23' }, created: new Date(), body: '1) Viola Davis (Doubt)<br>2) Marisa Tomei (The Wrestler)<br>3) Penelope Cruz (Vicky Cristina Barcelona)' },
            { id: 4, author: { id: 'ur33141554', name: 'telegramsam23' }, created: new Date(), body: '1) Viola Davis (Doubt)<br>2) Marisa Tomei (The Wrestler)<br>3) Penelope Cruz (Vicky Cristina Barcelona)' }
        ];














    };

    return result;
});