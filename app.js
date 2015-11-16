//https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE
var app = angular.module('myApp',[]);

app.controller('weatherController',['$scope','weatherService', function($scope,weatherService){
	var coordinates;
	console.log(coordinates)
	weatherService.then(function(result){
		$scope.allWeather = result.data.daily.data;
		$scope.dailyWeather = result.data.currently;
		console.log($scope.dailyWeather);
	})
}])

app.service('weatherService',['$http','$parse',function($http,$parse){
	return $http.jsonp('https://api.forecast.io/forecast/d0b46b0e1f3b4dd5cef2d1c271802a4d/40.7995,-74.3579?callback=JSON_CALLBACK')
}])

