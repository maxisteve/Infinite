
app.controller("DashboardCtrl", function ($scope) {

    $scope.frc = "false";
    $scope.lgctrl = "true";
    $scope.mainmnu = "false";
    $scope.test1 = function () {
        if ($scope.val1 == 'm' && $scope.val2 == 'm') {
            $scope.mainmnu = "true";
            alert("ry");
        } else {
            alert("Sry");
            $scope.mainmnu = "true";
        }
    }


    $scope.sgnfrm = function () {
        if ($scope.frc === "true") {
            $scope.frc = "false";
            $scope.lgctrl = "true";
        } else if ($scope.frc === "false") {
            $scope.frc = "true";
            $scope.lgctrl = "false";
        } else {
            $scope.frc = "true";
            $scope.lgctrl = "false";
        }
    }

});