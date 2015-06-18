var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.ajax = function() {
   		$http.get("http://vps164888.ovh.net/challengeangular/latest.json")
    		.success(function(response) {
			$scope.latest = response;
			console.log($scope.latest);
		});
	};

	$scope.show = function(id) {
		
		console.log(id);
	};
});
