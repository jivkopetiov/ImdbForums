var app = angular.module('imdbForumsApp', ['ngRoute', 'ngResource', 'ngSanitize']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when("/", { templateUrl: "/views/boards.html", controller: "boardsCtrl" });
    $routeProvider.when("/boards", { templateUrl: "/views/boards.html", controller: "boardsCtrl" });
    $routeProvider.when("/boards/:boardId/threads", { templateUrl: "/views/threads.html", controller: "threadsCtrl" });
    $routeProvider.when("/boards/:boardId/threads/:threadId/posts", { templateUrl: "/views/posts.html", controller: "postsCtrl" });
    $routeProvider.when("/boards/:boardId/threads/:threadId/newPost", { templateUrl: "/views/newPost.html", controller: "newPostCtrl" });

    $locationProvider.html5Mode(true);

});

app.controller("boardsCtrl", function ($scope, boardsService) {

    var boards = boardsService.getAllBoards();
    $scope.categories = _.chain(boards).pluck("category").uniq().value();
    $scope.boards = boards;

});

app.controller("threadsCtrl", function ($scope, $routeParams, boardsService) {
    
    $scope.board = boardsService.getBoardById($routeParams.boardId);
    $scope.threads = boardsService.getThreadsForBoard($scope.board.id);

});


app.controller("postsCtrl", function ($scope, $routeParams, boardsService) {

    $scope.board = boardsService.getBoardById($routeParams.boardId);
    $scope.thread = boardsService.getThreadById($routeParams.boardId, $routeParams.threadId);
    $scope.posts = boardsService.getPostsForThread($scope.thread.id);

});