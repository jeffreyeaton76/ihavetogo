"use strict";

(function() {
angular
  .module('ihavetogo', ['ngRoute'])
  .controller('ToiletController', ToiletController)
  .factory('toiletFactory', toiletFactory);

function ToiletController(toiletService) {
    var vm = this;
    vm.toilets = [];
    vm.createToilet = createToilet;
    vm.findToilet = findToilet;
    vm.updateToilet = updateToilet;
    vm.title = 'Toilets';

    createToilet();

    function createToilet() {
      return toiletService.createToilet().then(function(data){
          vm.toilets = data;
          return vm.toilets;
      });
    }

    function findToilet() {

    }

    function updateToilet() {

    }



  }
}

function toiletFactory() {

}

})();
