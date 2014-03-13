/**
 * Created by Amit Thakkar on 8/3/14.
 */
'use strict';

var users = [
    {name: "Amit", age: 25},
    {name: "Kanika", age: 45}
];

function MainController($scope) {
    $scope.mainPage = {
        title: "User Management"
    };
}

function UserList($scope) {
    $scope.users = [];
    angular.extend($scope.users, users);
}

function CreateUser($scope, $location) {
    $scope.user = {};
    $scope.add = function () {
        users.push(angular.copy($scope.user));
        $location.path("/list");
    };
    $scope.cancel = function () {
        $scope.user = {};
    };
}

angular.module('route', ['ngRoute', 'pasvaz.bindonce'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/list', {templateUrl: 'partials/list.html', controller: UserList})
            .when('/create', {templateUrl: 'partials/create.html', controller: CreateUser})
            .otherwise({redirectTo: '/list'});
    }]);
