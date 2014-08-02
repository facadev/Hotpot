'use strict';

angular.module('yeomanIonicAngularPhonegapSeedApp')
.service('Countries', ['backend', function (backend) {
  return {
    load: function () {
      return backend.getCountries();
    }
  };
}]);