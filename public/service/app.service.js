"use strict";

angular.module("app.service", []).factory("AppService", [
    "$http",
    "$q",
    function($http, $q) {
        return {
            // check user validations
            getUser: function() {
                var defer = $q.defer();

                $http.get("/api/drive/user").then(
                    (results) => {
                        defer.resolve(results.data);
                    },
                    (err) => {
                        defer.reject(err);
                    }
                );

                return defer.promise;
            },

            // retrieve oauth url from server
            getOAuthUrl: function() {
                var defer = $q.defer();

                $http.get("/api/drive/auth").then(
                    (results) => {
                        defer.resolve(results.data);
                    },
                    (err) => {
                        defer.reject(err);
                    }
                );

                return defer.promise;
            },

            // upload image to drive
            uploadImage: function(image) {
                var defer = $q.defer();

                var formData = new FormData();
                formData.append("image", image);

                $http
                    .post("/api/drive/upload", formData, {
                        transformRequest: angular.identity,
                        headers: {
                            "Content-Type": undefined
                        }
                    })
                    .then(
                        (result) => {
                            defer.resolve(result.data);
                        },
                        (err) => {
                            defer.reject(err);
                        }
                    );

                return defer.promise;
            },

            logout: function() {
                var defer = $q.defer();

                $http.post("/api/drive/logout").then(
                    (results) => {
                        defer.resolve(results.data);
                    },
                    (err) => {
                        defer.reject(err);
                    }
                );

                return defer.promise;
            }
        };
    }
]);
