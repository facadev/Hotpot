'use strict';

angular.module('yeomanIonicAngularPhonegapSeedApp')
.controller('MainCtrl', ['$scope', 'Countries', function ($scope, Countries) {
  $scope.onRefresh = function() {
    Countries.load().then(function(datas) {
      $scope.datas = datas.Results;
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
}]);
