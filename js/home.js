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
    $scope.throwExpt = function() {
        try {
            throw new Error("An Error Occured1");
        } catch (except) {
            $exceptionHandler(except, " : Button was Pressed1");
        }
    };
    $scope.emessages = ['Exception', 'info', 'Fatal', 'debug'];    
});