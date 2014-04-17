/**
 * Created by Amit Thakkar on 27/3/14.
 */
'use strict';

var serviceTestApp = angular.module('serviceTest', []);

serviceTestApp.service('TestService', function ($q) {
    // service is just a constructor function that will be called with 'new', singleton calls only once
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

function TestController($scope, TestService) {
    TestService.getUsers().
        then(function (users) {
            $scope.users = users;
        });
}
