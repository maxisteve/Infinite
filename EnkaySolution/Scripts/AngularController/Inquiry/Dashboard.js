﻿app.controller('Dashboardctrl', ['$scope', function ($scope) {
    $scope.myData = [{ name: "Moroni", age: 50 },
    { name: "Tiancum", age: 43 },
    { name: "Jacob", age: 27 },
    { name: "Nephi", age: 29 },
    { name: "Enos", age: 34 }];
    $scope.gridOptions = {
        data: "myData",
        columnDefs: [{ field: 'name', displayName: 'First Name', width: 90},
            { field: 'age', cellClass: 'ageCell', headerClass: 'ageHeader' }]
    };
}]);