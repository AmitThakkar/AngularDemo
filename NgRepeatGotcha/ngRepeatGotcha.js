/**
 * Created by amit on 21/5/14.
 */
function NgRepeatGotchaController($scope) {
    $scope.numbers = [1, 2, 3];

    /*
     * With NgRepeat directive, same keys are banned in a collection, because AngularJS
     * uses keys to associate DOM nodes with items. If collection is a single object hash
     * then AngularJS associate DOM node with keys and if AngularJS having collection/list
     * of objects then AngularJS associate DOM node with reference of objects but if
     * AngularJS having collection/list of primitives(Numbers/String etc.) then AngularJS
     * associate DOM node with value of primitive, So duplicate primitive is not allowed.
     * So if we change numbers array as below then above code will produce an
     * Error: ngRepeat:dupes because numbers array containing 2 twice(on index 1 and 3).
     * */
//    $scope.numbers = [1, 2, 3, 2];
}