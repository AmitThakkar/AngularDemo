/**
 * Created by Amit Thakkar on 6/5/14.
 */
'use strict';

/*
 * Defining notationsSymbolsTest Module.
 * */
var notationSymbolsTestApp = angular.module('notationsSymbolsTest', []);

/*
 * Defining NotationSymbolsController with a property named age and a function named increaseAge()
 * */
function NotationSymbolsController($scope) {
    $scope.age = 25;
    $scope.increaseAge = function () {
        $scope.age++;
    };
}

/*
 * Defining a Isolated Scope Directive with read-only property(via @ notation) named age.
 * If We bind property from Parent Scope to child Directive Scope via @ notation
 * then if we make change to Parent Scope property then that change will automatically
 * reflect to Child Directive Scope property. But if we make change to Child Directive
 * Scope property then that change will not be reflect to Parent Scope property.
 * So we called it as read-only notation or 1-way-binding notation.
 * */
notationSymbolsTestApp.directive('readOnlyNotationSymbol', function () {
    return {
        scope: {
            readOnlyAge: '@userAge'
        },
        link: function (scope) {
            scope.increaseAge = function () {
                scope.readOnlyAge++;
            };
        },
        template: "<div>Read Only Age: {{readOnlyAge}}</div> <input type='button' value='Update Read Only Age' ng-click='increaseAge()'>"
    };
});

/*
 * Defining a Isolated Directive with 2-way-bind property(via = notation) named age.
 * If We bind property from Parent Scope to Child Directive Scope via = notation
 * then if we make change to Parent Scope property then that change will automatically
 * reflect to Child Directive Scope property. And if we make change to Child Directive
 * Scope property then that change will be automatically reflect to Parent Scope property.
 * So we called it as 2-way-binding notation.
 * */
notationSymbolsTestApp.directive('twoWayBindingNotationSymbol', function () {
    return {
        scope: {
            twoWayBindAge: '=userAge'
        },
        link: function (scope) {
            scope.increaseAge = function () {
                scope.twoWayBindAge++;
            };
        },
        template: "<div>Two Way Bind Age: {{twoWayBindAge}}</div> <input type='button' value='Increase Age' ng-click='increaseAge()'>"
    };
});

/*
 * Defining a Isolated Directive with function binding (& notation) named increaseAge().
 * We can bind any Expression or Function from Parent Scope to Child Directive Scope
 * via & notation.
 * */
notationSymbolsTestApp.directive('expressionFunctionBindingNotationSymbol', function () {
    return {
        scope: {
            functionIncreaseAge: '&increaseAge'
        },
        template: "<input type='button' value='Increase Age' ng-click='functionIncreaseAge()'>"
    };
});