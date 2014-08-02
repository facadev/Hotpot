'use strict';

angular.module('yeomanIonicAngularPhonegapSeedApp').controller('MenuCtrl', ['$scope', function ($scope) {
  $scope.openLeft = function() {
    $scope.sideMenuController.toggleLeft();
  };
}]);
