var scotchApp = angular.module('scotchApp');
scotchApp.controller("mainController", function($scope, $exceptionHandler) {
    $scope.message = 'Everyone come and see how good I look!';
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

    $scope.emessages = ['Exception', 'info', 'Fatal', 'debug'];    
});
