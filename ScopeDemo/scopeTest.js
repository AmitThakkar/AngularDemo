/**
 * Created by Amit Thakkar on 25/4/14.
 */
'use strict';

function ScopeTestController($scope) {
    $scope.scopeName = "ScopeTestController";
}

var scopeTestApp = angular.module('scopeTest', []);

scopeTestApp.directive('isolatedScopeTestWithoutTemplate', function () {
    return {
        scope: {},
        link: function (scope) {
            scope.scopeName = "isolatedScopeTestWithoutTemplate";
        }
    };
});

scopeTestApp.directive('isolatedScopeTestWithTemplate', function () {
    return {
        scope: {},
        link: function (scope) {
            scope.scopeName = "isolatedScopeTestWithTemplate";
        },
        template: 'isolatedScopeTestWithTemplate: {{scopeName}}'
    };
});

scopeTestApp.directive('inheritedScopeTestWithoutTemplate', function () {
    return {
        scope: true,
        link: function (scope) {
            scope.scopeName = "inheritedScopeTestWithoutTemplate";
        }
    };
});

scopeTestApp.directive('inheritedScopeTestWithTemplate', function () {
    return {
        scope: true,
        link: function (scope) {
            scope.scopeName = "inheritedScopeTestWithTemplate";
        },
        template: 'inheritedScopeTestWithTemplate: {{scopeName}}'
    };
});

scopeTestApp.directive('sameScopeTestWithoutTemplate', function () {
    return {
        scope: false,
        link: function (scope) {
            scope.scopeName = "sameScopeTestWithoutTemplate";
        }
    };
});

scopeTestApp.directive('sameScopeTestWithTemplate', function () {
    return {
        link: function (scope) {
            scope.scopeName = "sameScopeTestWithTemplate";
        },
        template: 'sameScopeTestWithTemplate: {{scopeName}}'
    };
});