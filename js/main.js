var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.service('mylogservice', function() {
    this.myuserlog = function(message, cause) {
        alert('Something went wrong, contact your admin: ' + message)
        ///$scope.emessages.push('AKP thru Service:');
    }
});

scotchApp.config(function($provide) {
    $provide.decorator('$exceptionHandler', function($delegate, mylogservice) {
        return function(exception, cause) {
            $delegate(exception, cause);
            mylogservice.myuserlog(exception, cause);
        };
    });
});

scotchApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });
});