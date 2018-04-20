var app = angular.modul('', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.test = 'Hello World!';
	}]);