<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ImdbForums2.Default" %>

<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link href="/Site.css" rel="stylesheet" />
</head>
<body ng-app="imdbForumsApp">
    <div id="main">

        <ng-view />


        <script src="/scripts/underscore-min.js"></script>
        <script src="/scripts/angular.min.js"></script>
        <script src="/scripts/angular-route.min.js"></script>
        <script src="/scripts/angular-resource.min.js"></script>
        <script src="/scripts/angular-sanitize.min.js"></script>
        <script src="/scripts/controllers.js"></script>
        <script src="/scripts/directives.js"></script>
        <script src="/scripts/filters.js"></script>
        <script src="/scripts/services.js"></script>
    </div>
</body>
</html>
