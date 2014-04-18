/**
 * Created by Amit Thakkar on 27/3/14.
 */
'use strict';

var serviceTestApp = angular.module('serviceTest', []);

/*
 * Defining TestService, Which will load User list Asynchronously(From Web-Server).
 * for demo purpose we are using setTimeout().
 *
 * $q is build-in Angular Service which helps us to implement Promise-Defer Design Pattern and
 * will be injected to TestService by AngularJS via DI(Dependency Injection) Design Pattern.
 * */
serviceTestApp.service('TestService', function ($q) {
    // Defining Service function: getUsers which will load user list
    this.getUsers = function () {
        var deferred = $q.defer();
        setTimeout(function () {
            var users = [
                {name: "Amit Thakkar", age: 25},
                {name: "Namita", age: 35},
                {name: "Kanika", age: 38}
            ];
            deferred.resolve(users);
        }, 2000);
        return deferred.promise;
    };
});

/*
 * Defining TestController, who will use TestService to get User List.
 * */
function TestController($scope, TestService) {
    // Calling getUsers function on TestService.
    TestService.getUsers().
        then(function (users) {
            $scope.users = users;
        });
}
