"use strict";

(function(){
  angular
    .module( "toilets" )
    .controller( "ToiletNewController", [
      "ToiletFactory",
      ToiletNewControllerFunction
    ]);

    function ToiletNewControllerFunction( ToiletFactory ){

      this.toilet = new ToiletFactory(); //makes a blank toilet which I can add info too
      this.create = function(){
        this.toilet.$save()
      }
    }
}());
