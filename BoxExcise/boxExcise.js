/**
 * Created by Amit Thakkar on 28/4/14.
 */
'use strict';

angular.module('boxExcise', []);

function BoxExcise($scope) {
    var boxObject = {
        numbers: {
            1: {},
            2: {},
            3: {},
            4: {},
            5: {},
            6: {},
            7: {},
            8: {},
            9: {}
        }
    };
    $scope.boxObject = angular.copy(boxObject);
    $scope.applyColor = function (number) {
        if (!$scope.boxObject.selectedColor) {
            alert("Please select a color before clicking on boxes.");
            return;
        }
        if ($scope.boxObject.numbers[number].style) {
            alert("Already applied " + $scope.boxObject.numbers[number].style.background + " color.");
            return;
        }
        $scope.boxObject.numbers[number].style = {background: $scope.boxObject.selectedColor};
    };
    $scope.reset = function () {
        $scope.boxObject = angular.copy(boxObject);
    };
}