var app = angular.module('buildManager', []);
// app.factory('Data', function() {
// 	return {};
// });

function FormBuilder($scope) {
	// $scope.data = Data;
	$scope.models = {};

	$.ajax({
	    url: 'fields.json',
	    dataType: 'json',
	    success: function (response) {
	        console.log("Loaded fields");
	        $scope.fields = response;
	        $scope.$apply();
	    },
	    error: function() {
	    	console.log(arguments);
	    }
	});

	$scope.fieldChangeHandler = function(fieldid) {
		FormActions($scope, fieldid);
	}

	$scope.submit = function() {
		var message = "<br />";
		for (var key in $scope.models) {
			message += "<b>" + key + "</b>" + ": " + $scope.models[key] + "<br />";
		}
		bootbox.alert(message);
	}
}