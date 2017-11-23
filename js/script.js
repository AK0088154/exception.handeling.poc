	//create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);
	scotchApp.service('mylogservice', function() {
	    this.myuserlog = function(message) {
	        //alert("AKP thru Service : " + message);
	        $scope.emessages.push('AKP thru Service:');
	        //$scope.emessages.push(message);
	    }
	});
	scotchApp.config(function($provide) {
	    $provide.decorator('$exceptionHandler', function($delegate, mylogservice) {
	        return function(exception, cause) {
	            $delegate(exception, cause);
	            mylogservice.myuserlog(exception);
	        };
	    });
	});

	// configure our routes
	scotchApp.config(function($routeProvider) {
	    $routeProvider
	        // route for the home page
	        .when('/', {
	            templateUrl: 'pages/home.html',
	            controller: 'mainController'
	        })
	        // route for the about page
	        .when('/about', {
	            templateUrl: 'pages/about.html',
	            controller: 'aboutController'
	        })
	        // route for the contact page
	        .when('/contact', {
	            templateUrl: 'pages/contact.html',
	            controller: 'contactController'
	        });
	});

	scotchApp.controller('contactController', function($scope) {
	    $scope.message = 'Contact us! JK. This is just a demo.';
	});

	scotchApp.controller("mainController", function($scope) {
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

	scotchApp.controller('aboutController', function($scope) {
	    $scope.message = 'Look! I am an about page.';
	});
	scotchApp.controller("aboutController", function($scope, $exceptionHandler, $http) {
	    var onSuccess = function(response) {
	        $scope.status = response.status;
	        $scope.data = response.data;
	        alert('aaaaaaa');
	        console.log('inside about controller');
	    };
	    var onError = function(response) {
	        $scope.status = response.status;
	        $scope.data = response.data;
	        $scope.error == "Name already in use"
	        throw new Error("aboutController Exception");
	    }
	    $scope.getException = function() {
	        $http.get("/getdata").then(onSuccess, onError);
	    };
	});

	scotchApp.controller("contactController", function($scope, $exceptionHandler) {

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
	            throw new Error("An Error Occured3");
	        } catch (except) {
	            $exceptionHandler(except, " : Button was Pressed3");
	        }
	    }
	});