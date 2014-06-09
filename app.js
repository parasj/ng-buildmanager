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
		if ($scope.models["buildProjectType"].toLowerCase().trim() === "jar" && $scope.models["buildTool"].toLowerCase().trim() === "maven") {
			$(".collapsegroup_container#release_container").hide();
		} else {
			$(".collapsegroup_container#release_container").show();
		}
	}

	$scope.submit = function() {
		var message = "<br />";
		for (var key in $scope.models) {
			message += "<b>" + key + "</b>" + ": " + $scope.models[key] + "<br />";
		}
		bootbox.alert(message);
	}
}