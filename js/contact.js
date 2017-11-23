var scotchApp = angular.module('scotchApp');
scotchApp.controller("contactController", function($scope, $exceptionHandler) {
    $scope.message = 'Contact Page - set using contactController';

    $scope.reThrowException = function() {
			try{
					throw new Error("Contact Controller: An Error Occured3");
			}
			catch(except){
					$exceptionHandler(except, " : Button was Pressed2");
			}
    }
});
