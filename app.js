//INSERT DETAILS WHERE SPECIFIED WITH STARS

var app = angular.module('mywebsite', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider, $locationProvider){
	$routeProvider
		.when('/home', {
			title: '****INSERT NAME HERE****',
			templateUrl: 'home.html',
			controller: 'homeController'
		})
		.when('/resume', {
			title: 'Resume',
			templateUrl: 'resume.html',
			controller: 'resumeController'
		})
		.when('/portfolio', {
			title: 'Portfolio',
			templateUrl: 'portfolio.html',
			controller: 'portfolioController'
		})
		.when('/contact', {
			title: 'Contact',
			templateUrl: 'contact.html',
			controller: 'contactController'
		})
		.otherwise({
			redirectTo: '/home'
		});

	$locationProvider.hashPrefix('');
});

app.controller('homeController', function($scope){
	$scope.title = '****INSERT NAME HERE****';
});

app.controller('resumeController', function($scope){
	$scope.title = 'Resume';
});

app.controller('portfolioController', function($scope){
	$scope.title = 'Portfolio';
});

app.controller('contactController', function($scope){
	$scope.title = 'Contact';
});





