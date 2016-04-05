//= require angular
//= require angular-resource

"use strict";

(function() {
  angular
  .module("toilets", [
    "ngResource"
  ])
  .controller("tcontroller", [
    "$resource",
    ToiletsController
  ]);

  function ToiletsController($resource) {
    var vm = this;
    var Toilet = $resource("/toilets/:id.json", {}, {
      update: {method: "PUT"}
    });
    vm.data = Toilet.query();

    vm.destroy = function(toilet_index) {
      vm.data.splice(product_index, 1);
    } // end destroy

    vm.new_toilet = {};
    vm.create = function() {
      vm.data.push(angular.copy(vm.new_toilet));
      vm.new_toilet = {};
    }
  }
})();
