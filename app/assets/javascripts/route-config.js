"use strict";

angular
  .module('ihavetogo')
  .config(config);

function config($routeProvider) {
  $routeProvider
      .when('/toilets', {
          templateUrl: 'toilets.html',
          controller: 'ToiletsController',
          controllerAs: 'vm',
          resolve: {
            toiletdata: toiletdata
          }
      });
}
