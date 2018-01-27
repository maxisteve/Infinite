app.controller('LoginCtrl', ['$scope','$location', function ($scope, $location, $rootScope) {

    $scope.loginData = {
        userName: null,
        passWord: null
    }

    $scope.login = function ()
    {
        alert($scope.loginData.userName);

    }
    $scope.attemptLogin = function () {
        if ($scope.loginData.userName == $scope.loginData.passWord) { // test
            alert('test Pass');
            $location.path("/Inquiry/add");
        } else {
            alert('test Fail');
            $scope.loginError = "Invalid user/pass.";
        }
    }
}]);