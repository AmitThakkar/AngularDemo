/**
 * Created by Amit Thakkar on 8/3/14.
 */
'use strict';

var users = [
    {id: 1, name: "Amit", age: 25},
    {id: 2, name: "NM", age: 43},
    {id: 3, name: "Kanika", age: 45}
];

function MainController($scope) {
    $scope.mainPage = {
        title: "User Management"
    };
}

function UserListController($scope) {
    $scope.users = users;
    $scope.remove = function (id) {
        $scope.users = _.filter($scope.users, function (user) {
            return user.id != id;
        });
        users = $scope.users;
    };
}

function CreateUserController($scope, $location) {
    $scope.user = {id: users.length + 1};
    $scope.add = function () {
        users.push(angular.copy($scope.user));
        $location.path("/user/show/" + $scope.user.id);
    };
    $scope.cancel = function () {
        $scope.user = {id: users.length + 1};
    };
}

function ShowUserController($scope, $routeParams) {
    $scope.user = _.find(users, function (user) {
        return user.id == $routeParams.id;
    });
}

function EditUserController($scope, $routeParams, $location) {
    var currentUser = _.find(users, function (user) {
        return user.id == $routeParams.id;
    });
    $scope.user = angular.copy(currentUser);
    $scope.update = function () {
        users[$scope.user.id - 1] = angular.copy($scope.user);
        $location.path("/user/list");
    };
    $scope.cancel = function () {
        $scope.user = angular.copy(currentUser);
    };
}

angular.module('route', ['ngRoute', 'pasvaz.bindonce'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/user/list', {templateUrl: 'partials/list.html', controller: UserListController})
            .when('/user/create', {templateUrl: 'partials/create.html', controller: CreateUserController})
            .when('/user/edit/:id', {templateUrl: 'partials/edit.html', controller: EditUserController})
            .when('/user/show/:id', {templateUrl: 'partials/show.html', controller: ShowUserController})
            .otherwise({redirectTo: '/user/list'});
    }]);
