/**
 * Created by Amit Thakkar on 6/5/14.
 */
'use strict';

var notationSymbolsTestApp = angular.module('notationsSymbolsTest', []);
function NotationSymbolsController($scope) {
    $scope.name = "Amit";
    $scope.updateName = function () {
        $scope.name = "Amit Thakkar -> " + +new Date();
    };
}

notationSymbolsTestApp.directive('readOnlyNotationSymbol', function () {
    return {
        scope: {
            readOnlyProperty: '@userName'
        },
        link: function (scope) {
            scope.updateName = function () {
                scope.readOnlyProperty = "Amit Kumar -> " + +new Date();
            };
        },
        template: "<div>Name Read Only: {{readOnlyProperty}}</div> <input type='button' value='Update Read Only Name' ng-click='updateName()'>"
    };
});