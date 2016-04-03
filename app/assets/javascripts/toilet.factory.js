"use strict";

angular
  .module('ihavetogo')
  .factory('toiletdata', toiletdata);

toiletdata.$inject = ['$http'];

function toiletdata($http) {
    return {
      createToilet: createToilet
    };

    function createToilet() {
      return $http.get(api/maa)
    }
 }
