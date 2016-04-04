"use strict";

(function(){
  angular
  .module("toilets")
  .controller("ToiletShowController", [
    "ToiletFactory",
    "$stateParams",
    ToiletShowControllerFunction
  ]);

  function ToiletShowControllerFunction(ToiletFactory, $stateParams){
    this.toilet = ToiletFactory.get({id: $stateParams.id}); //looks in url and passes number into get
    }
}());
