/**
 * Created by Amit Thakkar on 25/4/14.
 */
'use strict';

/*
 * Defining ScopeTestController with two scope fields
 * */
var scopeTestApp = angular.module('scopeTest', []);

function ScopeTestController($scope) {
    $scope.scopeName = "ScopeTestController";
    $scope.controllerField = "controllerField";
}

scopeTestApp.directive('isolatedScopeTestWithoutTemplate', function () {
    return {
        // 'scope object hash' created a new isolated Scope.
        scope: {},
        link: function (scope) {
            scope.scopeName = "isolatedScopeTestWithoutTemplate";
        }
    };
});

scopeTestApp.directive('isolatedScopeTestWithTemplate', function () {
    return {
        // 'scope object hash' created a new isolated Scope.
        scope: {},
        link: function (scope) {
            scope.scopeName = "isolatedScopeTestWithTemplate";
        },
        template: 'isolatedScopeTestWithTemplate: {{scopeName}} {{controllerField}}'
    };
});

scopeTestApp.directive('inheritedScopeTestWithoutTemplate', function () {
    return {
        // 'scope true' created a new inherited Scope.
        scope: true,
        link: function (scope) {
            scope.scopeName = "inheritedScopeTestWithoutTemplate";
        }
    };
});

/*
 * Defining directive with Inherited Scope.
 * */
scopeTestApp.directive('inheritedScopeTestWithTemplate', function () {
    return {
        // 'scope true' created a new inherited Scope.
        scope: true,
        link: function (scope) {
            scope.scopeName = "inheritedScopeTestWithTemplate";
        },
        template: 'inheritedScopeTestWithTemplate: {{scopeName}} {{controllerField}}'
    };
});

scopeTestApp.directive('inheritedScopeTest2WithoutTemplate', function () {
    return {
        // 'scope true' created a new inherited Scope.
        scope: true,
        link: function (scope) {
            scope.scopeName = "inheritedScopeTest2WithoutTemplate";
        }
    };
});

scopeTestApp.directive('inheritedScopeTest2WithTemplate', function () {
    return {
        // 'scope true' created a new inherited Scope.
        scope: true,
        link: function (scope) {
            scope.scopeName = "inheritedScopeTest2WithTemplate";
        },
        template: 'inheritedScopeTest2WithTemplate: {{scopeName}} {{controllerField}}'
    };
});

scopeTestApp.directive('parentScopeTestWithoutTemplate', function () {
    return {
        // Default value of scope is false. 'scope false' use same scope in which it will define means Parent Scope.
        scope: false,
        link: function (scope) {
            scope.scopeName = "parentScopeTestWithoutTemplate";
        }
    };
});

/*
 * Defining directive with Parent Scope.
 * */
scopeTestApp.directive('parentScopeTestWithTemplate', function () {
    return {
        // Default value of scope is false. 'scope false' use same scope in which it will define means Parent Scope.
        link: function (scope) {
            scope.scopeName = "parentScopeTestWithoutTemplate";
        },
        template: 'parentScopeTestWithTemplate: {{scopeName}} {{controllerField}}'
    };
});