var scotchApp = angular.module('scotchApp');
scotchApp.controller("aboutController", function($scope, $exceptionHandler) {
    $scope.message = 'About Page - set using aboutController';
    var onSuccess = function(response) {
        $scope.status = response.status;
        $scope.data = response.data;
    };

    var onError = function(response) {
        $scope.status = response.status;
        $scope.data = response.data;
        $scope.error == "Name already in use"

    }
    $scope.getException = function() {
        $http.get("/getdata").then(onSuccess, onError);
    };

    $scope.throwExpt = function() {
        try {
            throw new Error("An Error Occured2");
        } catch (except) {
            $exceptionHandler(except, " : Button was Pressed2");
        }
    }
});