var app = angular.module('buildManager', []);
app.factory('Data', function() {
	return {};
});

function FormBuilder($scope, Data) {
	$scope.data = Data;
	$scope.models = {};

	$scope.fields = [
	{
		key: "Define",
		id: "define",
		data: {
			"Name": {
				"type": "text",
				"data": {
					"id": "defineName"
				}
			},
			"Team": {
				"type": "select",
				"data": {
					"id": "defineTeam",
					"options": [
						"Team Alpha",
						"Team Beta",
						"Team Zeta"
					]
				}
			},
			"Organization": {
				"type": "select",
				"data": {
					"id": "defineOrganization",
					"options": [
						"Walmart Labs",
						"Sam's Club",
						"Walmart.com"
					]
				}
			}
		}
	},

	{
		key: "Build",
		id: "build",
		data: {
			"Tool": {
				"type": "text",
				"data": {
					"id": "buildTool"
				}
			},
			"Project Type": {
				"type": "text",
				"data": {
					"id": "buildProjectType"
				}
			},
			"Version": {
				"type": "text",
				"data": {
					"id": "buildVersion"
				}
			}
		}
	},

	{
		key: "Deploy",
		id: "deploy",
		data: {
			"Environment Type": {
				"type": "text",
				"data": {
					"id": "deployEnvType"
				}
			},
			"Environment Name": {
				"type": "text",
				"data": {
					"id": "deployEnvName"
				}
			}
		}
	},

	{
		key: "Release",
		id: "release",
		data: {
			"Release Type": {
				"type": "text",
				"data": {
					"id": "releaseType"
				}
			}
		}
	}
	];

	$scope.fieldChangeHandler = function(fieldid) {
		// console.log(fieldid, $scope.models[fieldid]);
		// console.log($scope);
		if (fieldid === "buildProjectType" && $scope.models[fieldid] === "jar") {
			$(".collapsegroup_container#release_container").hide();
		} else {
			$(".collapsegroup_container#release_container").show();
		}
	}

	// $scope
}