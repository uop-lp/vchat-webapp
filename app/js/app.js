'use strict';


// Declare app level module which depends on filters, and services
<<<<<<< HEAD
/* 
Tell angular to include the new module vchatLoaderApp
1. register vchatLoaderApp in app.js
*/

angular.module('vchatLoaderderApp', [
=======
angular.module('myApp', [
>>>>>>> 73c92225393e208318f6c82e9215791fe4b8d7f2
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
