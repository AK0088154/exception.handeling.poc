	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);
	scotchApp.service('mylogservice', function() {
        this.myuserlog = function (message) {
            alert("AKP thru Service : " + message);
        }
    });	
	scotchApp.config(function ($provide) {

        $provide.decorator('$exceptionHandler', function ($delegate, mylogservice) {

            return function (exception, cause) {
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
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	// scotchApp.controller('mainController', function($scope) {
	// 	// create a message to display in our view
	// 	$scope.message = 'Everyone come and see how good I look!';
	// });

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	
	scotchApp.controller("mainController", function ($scope) {

         var onSuccess = function (response) {
             $scope.status = response.status;
             $scope.data = response.data;

         };

         var onError = function (response) {
             $scope.status = response.status;
             $scope.data = response.data;
         }
         $scope.getStudent = function () {
             $http.get("/getdata").then(onSuccess, onError);

         };
         $scope.messages = ['Exception', 'info', 'Fatal', 'debug'];
     });
	
	scotchApp.controller("aboutController", function ($scope, $exceptionHandler, $http) {

        var onSuccess = function (response) {
            $scope.status = response.status;
            $scope.data = response.data;
            alert('aaaaaaa');
            console.log('inside about controller');

        };

        var onError = function (response) {
            $scope.status = response.status;
            $scope.data = response.data;
            $scope.error=="Name already in use"
            throw new Error("Hey just testing");
        }
        $scope.getException = function () {
            $http.get("/getdata").then(onSuccess, onError);
        };
        
 /*       // dependency declared on $exceptionHandler
        $scope.throwExpt = function() {
          try{
            throw new Error("An Error Occured");
          }
            catch(except){
              // catch is used to get the cause of the exception
              $exceptionHandler(except, " : Button was Pressed");
           }
        } 
      })   
        .factory("$exceptionHandler", function($log){
          return function (exception, cause){
            $log.error("Error : " + exception.message + "(Cause of Error" + cause +")");
            //$log.warn("Error : " + exception.message + "(Cause of Error" + cause +")");
          }*/
    });