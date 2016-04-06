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
  .controller("showCtrl", [
    "Toilet",
    "$stateParams",
    showCtrlFunction
  ])

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "/partials/toilet.index.html",
      controller: "indexCtrl",
      controllerAs: "indexVM"
    })
    .state("aboutUs", {
      url: "/about",
      templateUrl: "/partials/toilet.about.html"
    })
    .state("toiletMap", {
      url: "/map",
      templateUrl: "partials/toilet.map.html",
      controller: "indexCtrl",
      controllerAs: "indexVM"
    })
    .state("new", {
      url: "/new",
      templateUrl: "/partials/toilet.new.html",
      controller: "newCtrl",
      controllerAs: "newVM"
    })
    .state("show", {
      url: "/:id",
      templateUrl: "/partials/toilet.show.html",
      controller: "showCtrl",
      controllerAs: "showVM"
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

  function showCtrlFunction(Toilet, $stateParams) {
    var showVM = this;
    Toilet.all.$promise.then(function() {
      Toilet.all.forEach(function(toilet) {
        if(toilet.id == $stateParams.id) {
          showVM.toilet = toilet;
        }
      });
    });
  } // end showCtrlFunction

})();
