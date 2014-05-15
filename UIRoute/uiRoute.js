/**
 * Created by Amit Thakkar on 8/3/14.
 */
'use strict';

var users = [
    {id: 1, name: "Amit", age: 25},
    {id: 2, name: "NM", age: 43},
    {id: 3, name: "Kanika", age: 45}
];

/*
 * Master Controller, whose scope will be visible to whole body,
 * because we will mark it on body tag.
 * */
function MainController($scope) {
    $scope.mainPage = {
        title: "UI Route"
    };
}

/*
 * UserListController, who is responsible for /user/list Url
 * and its scope will be visible to list.html only.
 * */
function UserListController($scope) {
    $scope.users = users;
    $scope.remove = function (id) {
        $scope.users = _.filter(users, function (user) {
            return user.id != id;
        });
        users = $scope.users;
    };
}

/*
 * CreateUserController, who is responsible for /user/create Url
 * and its scope will be visible to create.html only.
 * */
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

/*
 * ShowUserController, who is responsible for /user/show Url
 * and its scope will be visible to show.html only.
 * */
function ShowUserController($scope, $routeParams) {
    $scope.user = _.find(users, function (user) {
        return user.id == $routeParams.id;
    });
}

/*
 * EditUserController, who is responsible for /user/edit Url
 * and its scope will be visible to edit.html only.
 * */
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

/*
 * Route Mapping: defining route for routeTest module, and as from angular 1.2 version
 * ngRoute is now different module, which we have to include explicitly in depended module.
 * */
// Defining a module with name routeTest and providing ngRoute as dependency.
angular.module('uiRouteTest', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('product', {url: '/products', templateUrl: 'partials/products.html'})
            .state('home', {url: '/home', templateUrl: 'partials/home.html'})
            .state('user', {url: '/user', templateUrl: 'partials/user/main.html'})
            .state('user.list', {url: '/list', templateUrl: 'partials/user/list.html', controller: UserListController})
            .state('user.edit', {url: '/edit/:id', templateUrl: 'partials/user/edit.html', controller: EditUserController})
            .state('user.show', {url: '/show/:id', templateUrl: 'partials/user/show.html', controller: ShowUserController})
            .state('user.create', {url: '/create', templateUrl: 'partials/user/create.html', controller: CreateUserController});
    }]);
