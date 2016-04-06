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
  .controller("mapCtrl", [
    "Toilet",
    mapCtrlFunction
  ])
  .controller("showCtrl", [
    "Toilet",
    "$stateParams",
    showCtrlFunction
  ])
  .directive("tform", [
    "Toilet",
    toiletFormFunction
  ]); // end of angular model definitions

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("index", {
      url: "",
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
      controller: "mapCtrl",
      controllerAs: "mapVM"
    })
    .state("new", {
      url: "/new",
      templateUrl: "/partials/toilet.new.html"
      // controller: "newCtrl",
      // controllerAs: "newVM"
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
      Toilet.createMarker = function(info, myMap){
        var markers = [];
        var infoWindow = new google.maps.InfoWindow();
        var geocoder = new google.maps.Geocoder();
        var address = info.business_address;
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            var marker = new google.maps.Marker({
              map: myMap,
              position: results[0].geometry.location,
              title: info.business_name
            });
            marker.content = '<div class="infoWindowContent"><a href="#/' + info.id + '">' + 'Overall Rating(1-5): ' + info.rating + '</a></div>';
            google.maps.event.addListener(marker, 'click', function(){
              infoWindow.setContent(info.business_name + marker.content);
              infoWindow.open(myMap, marker);
            });
            markers.push(marker);
          }
        });
      };
      return Toilet;
  } // end toiletFactoryFunction


  function indexCtrlFunction(Toilet) {
    var indexVM = this;
    indexVM.toilets = Toilet.query();
    indexVM.new_toilet = new Toilet();
  } // end indexCtrlFunction

  function mapCtrlFunction(Toilet) {
    var mapVM = this;
    mapVM.toilets = Toilet.query();
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(38.8896352, -77.0268181),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var myMap = new google.maps.Map(document.getElementById('map'), mapOptions);
    mapVM.toilets.$promise.then(function(response){
      for (var i = 0; i < mapVM.toilets.length; i++){
        Toilet.createMarker(mapVM.toilets[i], myMap);
      }
    });
    // creates the markers' info windows
    var openInfoWindow = function(e, selectedMarker){
      e.preventDefault();
      google.maps.event.trigger(selectedMarker, 'click');
    };
    mapVM.new_toilet = new Toilet();
  } // end mapCtrlFunction


  function showCtrlFunction(Toilet, $stateParams) {
    var showVM = this;
    Toilet.all.$promise.then(function() {
      Toilet.all.forEach(function(toilet) {
        if(toilet.id == $stateParams.id) {
          showVM.toilet = toilet;
        } // end of params comparison
      }); // end of Toilet.all each
    }); // end of Toilet.all promise
  } // end showCtrlFunction

  function toiletFormFunction(Toilet) {
    return {
      templateUrl: "partials/toilet.form.html",
      scope: {
        toilet: "=",
        formMethod: "@"
      },
      link: function(scope) {
        Toilet.create = function() {
          Toilet.save(scope.toilet, function(response) {
            Toilet.all.push(response);
            Toilet.createMarker(response);
          }); // end of save
        } // end of create function
      } // end of link function
    } // end of return statement
  } // end of toiletFormFunction

})();
