var scotchApp = angular.module('scotchApp');
scotchApp.controller("aboutController", function($scope, $exceptionHandler) {
    $scope.message = 'About Page - set using aboutController';

    $scope.throwException = function() {
        throw new Error("aboutController : An Error Occured2");
    }
});
