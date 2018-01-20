app.controller('Dashboardctrl', ['$scope', function ($scope) {

    $scope.goadd = function () {

    }


    $scope.myData = [{ name: "Moroni", age: 50 },
    { name: "Tiancum", age: 43 },
    { name: "Jacob", age: 27 },
    { name: "Nephi", age: 29 },
    { name: "Enos", age: 34 }];
    $scope.gridOptions = {
        enableRowSelection: true,
        enableSelectAll: true,
        enableFiltering: true,
        rowHeight: 30,
        data: "myData",
        columnDefs: [{ field: 'name', displayName: 'First Name',height:3},
            { field: 'age', cellClass: 'ageCell', headerClass: 'ageHeader' }]
    };
}]);