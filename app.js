//INSERT DETAILS WHERE  BY COMMENTS

var app = angular.module('mywebsite', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider, $locationProvider){
	$routeProvider
		.when('/home', {
			title: 'Home',
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
	/***
	Change John Doe to your name
	***/
	$scope.title = 'John Doe';
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





