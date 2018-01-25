app.controller('Dashboardctrl', ['$scope', function ($scope) {

    $scope.goadd = function () {

    }


    $scope.myData = [{ name: "Moroni", age: 50 },
    { name: "Tiancum", age: 43 },
    { name: "Jacob", age: 27 },
    { name: "Nephi", age: 29 },
    { name: "Enos", age: 34 }];
    $scope.gridOptions = {
        data: 'myData',
        enableCellEditOnFocus: true,
        enableColumnResizing: true,
        enableFiltering: true,
        enableGridMenu: true,
        showGridFooter: true,
        showColumnFooter: true,
        columnDefs: [
            { field: 'ReferenceNumber', displayName: 'Reference #' },
            { field: 'Customer', cellClass: 'Customer' },
                { field: 'Date', displayName: 'D O I' },
                { field: 'Status', cellClass: 'Status' },
                
        ]
    };
}]);