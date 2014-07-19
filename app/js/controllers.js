'use strict';

/* Controllers */

angular.module('vchatApp.controllers', [])
  .controller('vchatController', ['$scope', function($scope) {
    $scope.stream = [];
  }])
  .controller('myCtrl-2', ['$scope', function($scope) {
    $scope.data = [];
  }]);
