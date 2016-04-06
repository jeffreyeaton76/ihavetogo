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
  ])  .controller("MapCtrl", [
    "$resource",
    "CityFactory",
    MapCtrlFunction
  ])
  .directive("cityForm", [
    "CityFactory",
    cityFormFunction
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
      Toilet.save(vm.new_toilet, function(response){
        vm.data.push(response);
        vm.new_toilet = {};
      }); // end save
    } // end create
  }
})();
