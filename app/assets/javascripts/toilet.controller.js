"use strict";

angular
  .module('ihavetogo.toilets')
  .controller('ToiletController', ToiletController);

ToiletController.$inject = ['toiletdata'];

function ToiletController(toiletdata) {
  var vm = this;
  vm.toilets = [];

  createToilet();

  function createToilet() {
    return toiletdata.createToilet()
    .then(function(data) {
        vm.toilets = data;
        return vm.toilets;
    });
  }
 }
