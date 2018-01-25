"use strict"

var app = angular.module("MasterApp", ['ui.router', 'ui.grid', 'ui.grid.selection', 'angucomplete-alt']);
 
//app.config(function ($stateProvider, $urlRouterProvider) {

//   // $urlRouterProvider.otherwise('/home');

//    $stateProvider

//        //// HOME STATES AND NESTED VIEWS ========================================
//        //.state('home', {
//        //    url: '/home',
//        //    views: {
//        //        templateUrl: '../../Views/Customer/add.html'
//        //    }
//        //})

//        //// nested list with custom controller
//        //.state('Customer', {
//        //    url: '/list',
//        //    templateUrl: 'partial-home-list.html',
            
//        //})

//        //// nested list with just some random string data
//        //.state('Service', {
//        //    url: '/Service',
//        //    template: 'I could sure use a drink right now.'
//        //})

//        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
//        .state('about', {
//            url: '/about',
//            views: {
//                '': { templateUrl: 'partial-about.html' },
//                'columnOne@about': { template: 'Look I am a column!' },
//                'columnTwo@about': {
//                    templateUrl: 'table-data.html',
//                    controller: 'scotchController'
//                }
//            }

//        });

//});



//var helloState = {
//    name: 'Inquiry',
//    url: '/Inquiry/add',
//    templateUrl: '../../Views/Inquiry/add.html'
//}



//var aboutState = {
//    name: 'about',
//    url: '/about',
//    template: '<h3>Its the UI-Router hello world app!</h3>'
//}

//$stateProvider.state(helloState);
//$stateProvider.state(aboutState);
//$stateProvider
//    .state("contact", {
//        url: "/contact/",
//        templateUrl: '/app/Aisel/Contact/views/contact.html',
//        controller: 'ContactCtrl'
//    });

app.config(function ($stateProvider) {

    var defaultroute = {
        name: 'default',
        url: '/Inquiry/add',
        templateUrl: '../../Views/Inquiry/add.html'
    }
 
    var Inquiry = {
        name: 'Inquiry',
        url: '/Inquiry/add',
        templateUrl: '../../Views/Inquiry/add.html'
    }
    var Quote = {
        name: 'Quote',
        url: '/Quote/add',
        templateUrl: '../../Views/Quote/add.html'
    }
    var Service= {
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