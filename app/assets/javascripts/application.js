// This is a manifest file that'll be compiled into application.javascripts, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks



"use strict";

(function(){
  angular
  .module("ihavetogo", [
    "ui.router",
    "toilets"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("toiletIndex", {
      url: "/toilets",
      templateUrl: "index.html",
      controller: "ToiletIndexController",
      controllerAs: "ToiletIndexViewModel"
    })
    .state("toiletNew", {
      url: "/toilets/new",
      templateUrl: "javascripts/toilets/new.html",
      controller: "ToiletNewController",
      controllerAs: "ToiletNewViewModel"
    })

    .state("toiletUpdate", {
      url: "/toilets/:id/update",
      templateUrl: "javascripts/toilets/update.html",
      controller: "ToiletUpdateController",
      controllerAs: "ToiletUpdateViewModel"
      })

    .state("toiletShow", {
      url: "/toilets/:id",
      templateUrl: "javascripts/toilets/show.html",
      controller: "ToiletShowController",
      controllerAs: "ToiletShowViewModel"
    });

  }
}());
