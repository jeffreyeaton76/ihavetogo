"use strict";

(function(){
  angular
    .module( "toilets" )
    .factory( "ToiletFactory", [
      "$resource",
      FactoryFunction
    ]);

  function FactoryFunction( $resource ){
    return $resource( "http://localhost:3000/toilets/:id", {}, {
        update: { method: "PUT" }
    });
  }
}());
