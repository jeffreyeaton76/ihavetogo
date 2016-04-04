"use strict";

(function(){
  angular
    .module( "ihavetogo" )
    .factory( "ToiletFactory", [
      "$resource",
      ToiletFactoryFunction
    ]);

  function ToiletFactoryFunction( $resource ){
    return $resource( "/toilets/:id.json", {}, {
        update: { method: "PUT" }
    });
  }
}());
