"use strict"

var app = angular.module("adminApp", ['ui.router', 'ui.grid', 'ui.grid.selection', 'angucomplete-alt']);
 

app.config(function ($stateProvider) {

    var defaultroute = {
        name: 'default',
        url: '/Inquiry/add',
        templateUrl: '../../Views/Inquiry/Dashboard.html'
    }

    var Inquiry = {
        name: 'Inquiry',
        url: '  ',
        templateUrl: '../../Views/Inquiry/Dashboard.html'


    }

    var Quote = {
        name: 'Quote',
        url: '/Quote/add',
        templateUrl: '../../Views/Quote/add.html'
    }

    var Service = {
        name: 'Service',
        url: '/Service/add',
        templateUrl: '../../Views/Service/add.html'
    }

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    }


    $stateProvider.state(defaultroute);
    $stateProvider.state(Inquiry);
    $stateProvider.state(Quote);
    $stateProvider.state(Service);


});