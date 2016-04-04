"use strict";

(function(){
  angular
    .module( "ihavetogo" )
    .controller( "ToiletUpdateController", [
      "ToiletFactory",
      "$stateParams",
      "$state",
      ToiletUpdateControllerFunction
    ]);

  function ToiletUpdateControllerFunction( ToiletFactory, $stateParams, $state ){
    this.toilet = ToiletFactory.get({id: $stateParams.id});
    this.update = function(){
      this.toilet.$update({id: $stateParams.id})
      $state.go("toiletShow", {id: $stateParams.id, reload: true})
    }
    this.destroy = function(){
      this.toilet.$delete({id: $stateParams.id});
    }
  }
}());
