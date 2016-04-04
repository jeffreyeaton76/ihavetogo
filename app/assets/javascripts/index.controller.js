"use strict";

(function(){

  angular
    .module( "ihavetogo" )
    .controller( "ToiletIndexController", [
      "ToiletFactory",
      ToiletIndexControllerFunction
    ]);

    function ToiletIndexControllerFunction( ToiletFactory ){
      this.toilets = ToiletFactory.query();
    }

}());
