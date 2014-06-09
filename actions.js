function FormActions($scope, fieldid) {
	// if (ProjectType=jar && Tool=Maven) then (Hide Release)
	if ($scope.models["buildProjectType"].toLowerCase().trim() === "jar" && $scope.models["buildTool"].toLowerCase().trim() === "maven") {
		$(".collapsegroup_container#release_container").hide();
	} else {
		$(".collapsegroup_container#release_container").show();
	}

}