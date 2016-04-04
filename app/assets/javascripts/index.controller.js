"use strict";

(function(){

  angular
    .module( "toilets" )
    .controller( "ToiletIndexController", [
      "ToiletFactory",
      ToiletIndexControllerFunction
    ]);

    function ToiletIndexControllerFunction( ToiletFactory ){
      this.toilets = ToiletFactory.query();
    }

}());
