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
		if (fieldid === "buildProjectType" && $scope.models[fieldid] === "jar") {
			$(".collapsegroup_container#release_container").hide();
		} else {
			$(".collapsegroup_container#release_container").show();
		}
	}
}