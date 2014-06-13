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
        // Creating isolated scope to understand scope visibility with NgTransclude directive.
        scope: {},
        link: function (scope) {
            scope.name = "Directive";
        },
        /*
         * template to replace Inner HTML of marked Directive. Template will get
         * scope of directive only(because it having isolated scope) but HTML
         * into ng-transclude gets scope of Controller where it defined.
         * */
        template: "<div>Template HTML with scope of {{name}}! <br/><br/><br/> " +
            "NgTransclude Directive: <span ng-transclude></span></div>",
        /*
         * transclude:true, put INNER HTML of directive into NgTransclude directive's
         * inner HTML of the template. That transclude HTML will get controller level
         * scope and template will get scope of directive whatever directive have.
         *
         * Default value is false(transclude:false, does not move INNER HMTL into
         * NgTransclude directive.).
         *
         * If we provide transclude: 'element' then AngularJS move whole directive node
         * into NgTransclude node.
         * */
        transclude: true,
        replace: true
    }
});