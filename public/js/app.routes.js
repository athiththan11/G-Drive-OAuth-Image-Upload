"use strict";

angular.module("app.routes", []).config([
    "$routeProvider",
    "$locationProvider",
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "view/login.html",
                controller: "AppController"
            })
            .when("/home", {
                templateUrl: "view/home.html",
                controller: "AppController"
            })
            .otherwise({
                redirectTo: "/login"
            });

        $locationProvider.html5Mode(true);
    }
]);
