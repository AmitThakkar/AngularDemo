/**
 * Created by amit on 27/3/14.
 */
'use strict';

var directiveTestApp = angular.module('directiveTest', []);
directiveTestApp.directive('myTemplate', function () { // Registering dtTemplate directive to directiveTest module
    return {
        /*
         * Restrict restricting to directive must be use as:
         * E stands for Element
         * C stand for Class name
         * M stands for Comment
         * A stands for Attribute
         * Here we are defining directive with all the type, if we don't provide restrict field then default depend on angular version
         * Angular 1.2.14 have default restrict value A means directive can be use as attribute only.
         * */
        restrict: "ECMA", // directive can be use as attribute, element, class and comment.
        template: "this is directive template test" // DOM element's inner content should be replace with this.
    };
});