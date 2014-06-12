/**
 * Created by Amit Thakkar on 07/06/14.
 */
'use strict';

/*
 * Defining transcludeApp Module.
 * */
var transcludeApp = angular.module('transcludeApp', []);

transcludeApp.controller("TranscludeController", function ($scope) {
    $scope.name = "Controller";
});

transcludeApp.directive("transcludeTest", function () {
    return {
        scope: {},
        link: function (scope) {
            scope.name = "Directive";
        },
        // template to replace Inner HTML of marked Directive. Template will get
        // scope of directive but HTML into ng-transclude gets scope of Controller.
        template: "<div>Template HTML with scope of {{name}}! <br/><br/><br/> NgTransclude Directive: <span ng-transclude></span></div>",
        // transclude:true, put INNER HTML of directive into NgTransclude directive's inner HTML of the template.
        // that transclude HTML will get parent scope and template will get scope of directive whatever directive have.
        // Default value is false. If we provide transclude: 'element' then AngularJS move whole directive node
        // into NgTransclude node.
        transclude: true,
        replace: true
    }
});