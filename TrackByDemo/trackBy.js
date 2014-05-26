/**
 * Created by Amit Thakkar on 24/5/14.
 */
'use strict';

/*
 * Dummy User list for repeating with ng-repeat with/without track by.
 * */
var users = [
    {id: 1, name: "Amit"},
    {id: 2, name: "PI"},
    {id: 3, name: "Raj"},
    {id: 4, name: "Suroor"}
];

/*
 * Defining trackByApp Module.
 * */
var trackByApp = angular.module('trackByApp', []);

/*
 * printMessage Directive is used to log the message attribute. We will use printMessage
 * Directive with NgRepeat so directive will be invoke as many times ng-repeat will repeat
 * the DOM element. So we can trace/check ng-repeat repeatation.
 * */
trackByApp.directive("printMessage", function () {
    return {
        link: function (scope, element, attributes) {
            console.log(attributes.message);
        }
    }
});

/*
 * Defining the TrackByController.
 * */
function TrackByController($scope) {
    $scope.userListForWithoutTrackBy = angular.copy(users);
    $scope.userListForWithTrackBy = angular.copy(users);
    /*
     * We reload both user list here.
     * */
    $scope.reloadList = function () {
        $scope.userListForWithoutTrackBy = angular.copy(users);
        $scope.userListForWithTrackBy = angular.copy(users);
    };
    $scope.printUserList = function () {
        /*
         * Each user from userListForWithoutTrackBy is having a extra property/field with named $$hashKey,
         * which is used by AngularJS to track/associate user with HTML element. And for userListForWithTrackBy
         * AngularJS use id(whatever we provide after track by in ng-repeat) for track/associate user with
         * HTML element.(track by field must be unique into whole list.)
         * */
        console.log("userListForWithoutTrackBy:-> ", $scope.userListForWithoutTrackBy);
        console.log("userListForWithTrackBy:-> ", $scope.userListForWithTrackBy);
    };
}