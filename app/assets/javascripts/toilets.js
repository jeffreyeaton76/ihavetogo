//= require angular
//= require angular-resource
//= require angular-ui-router
"use strict";

(function(){
  angular
  .module("ihavetogo", [
    "ngResource"
  ])
  .controller("toilet_controller", ["$resource", ToiletController]);

  function ToiletController($resource){
    var vm = this;
    vm.data = data;
    var Toilet = $resource("/toilets/:id.json", {}, {
        update: {method: "PUT"}
    });
    vm.data = Toilet.query();
  }
})();


// "use strict";
//
// (function() {
//   angular
//   .module("ihavetogo", [
//     "ui.router",
//     "ngResource"
//   ])
//   .config([
//     "stateProvider",
//     RouterFunction
//   ])
//   .factory("Toilet", [
//     "$resource",
//     destFactoryFunction
//   ])
//   .controller("indexController", [
//     "Toilet",
//     indexControllerFunction
//   ])
//   .controller("showController", [
//     "Toilet",
//     "$stateParams",
//     showControllerFunction
//   ])
//   .directive("toiletForm", [
//     "Toilet",
//     destFormFunction
//   ]);
//
// function RouterFunction($stateProvider){
//   $stateProvider
//   .state("index"), {
//     url: "/",
//     templateUrl: "ng-views/toilet.index.html",
//     controller: "indexController",
//     controllerAs: "indexVM"
//   })
//   .state("show", {
//     url: "/:id",
//     templateUrl: "ng-views/toilet.show.html",
//     controller: "showController",
//     controllerAs: "showVM"
//   });
// }
//
//   function destFactoryFunction($resource){
//     var Toilet = $resource("/toilets/:id.json"), {}, {
//       update: {method: "PUT"}
//     });
//     Toilet.all = Toilet.query();
//     return Toilet;
//
//   function indexControllerFunction(Toilet){
//     var indexVM = this;
//     indexVM.toilets = Toilet.all;
//     indexVM.newToilet = new Toilet();
//   }
//
//   function showControllerFunction(Toilet, $stateParams){
//     var showVM = this;
//     Toilet.all.$promise.then(function(){
//       Toilet.all.forEach(function(toilet){
//         if(toilet.id == $stateParams.id){
//           showVM.toilet = toilet;
//         }
//       });
//     });
//   }
//
//   function destFormFunction(Toilet){
//     return{
//       templateUrl: "ng-views/toilet.form.html",
//       scope: {
//         destination: "=",
//         formMethod:  "@"
//       },
//       link: function(scope){
//         scope.create = function(){
//           Toilet.save(scope.toilet, function(response){
//             Toilet.all.push(response);
//           });
//         }
//         scope.update = function(){
//           Toilet.update({id: scope.toilet.id}, scope.toilet, function(response){
//             console.log("You have successfully updated this toilet");
//           });
//         }
//       }
//     }
//   }
// }
// })();
