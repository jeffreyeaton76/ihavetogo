//= require angular
//= require angular-resource
//= require angular-ui-router.min

"use strict";

(function() {
  angular
  .module("toilets", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("Toilet", [
    "$resource",
    toiletFactoryFunction
  ])
  .controller("indexCtrl", [
    "Toilet",
    indexCtrlFunction
  ])
  // .controller("tcontroller", [
  //   "$resource",
  //   ToiletsController
  // ]);

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "partials/toilet.index.html",
      controller: "indexCtrl",
      controllerAs: "indexVM"
    }); // end index view
  } // end RouterFunction

  function toiletFactoryFunction($resource) {
    var Toilet = $resource("/toilets/:id.json", {}, {
        update: {method: "PUT"}
      });
      Toilet.all = Toilet.query();
      return Toilet;
  } // end toiletFactoryFunction

  function indexCtrlFunction(Toilet) {
    var indexVM = this;
    indexVM.toilets = Toilet.all;
    indexVM.new_toilet = new Toilet;
  } // end indexCtrlFunction

  // function ToiletsController($resource) {
  //   var vm = this;
  //   var Toilet = $resource("/toilets/:id.json", {}, {
  //     update: {method: "PUT"}
  //   });
  //   vm.data = Toilet.query();
  //
  //   vm.destroy = function(toilet_index) {
  //     vm.data.splice(product_index, 1);
  //   } // end destroy
  //
  //   vm.new_toilet = {};
  //   vm.create = function() {
  //     Toilet.save(vm.new_toilet, function(response){
  //       vm.data.push(response);
  //       vm.new_toilet = {};
  //     }); // end save
  //   } // end create
  // }
})();
