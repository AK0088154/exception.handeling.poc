var scotchApp = angular.module('scotchApp');
scotchApp.controller("contactController", function($scope, $exceptionHandler) {
    $scope.message = 'Contact Page - set using contactController';
    var onSuccess = function(response) {
        $scope.status = response.status;
        $scope.data = response.data;
    };

    var onError = function(response) {
        $scope.status = response.status;
        $scope.data = response.data;
    }

    $scope.getStudent = function() {
        $http.get("/getdata").then(onSuccess, onError);
    };

    $scope.setException = function() {
		throw new Error("Contact Controller: An Error Occured3");
    }
});