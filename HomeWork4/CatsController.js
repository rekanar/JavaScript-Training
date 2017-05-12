(function(module) {
  "use strict";
  
  function catsClickController() {
    var vm = this;
    vm.cat1Clik = 0;
    vm.cat2Clik = 0;
    vm.clickCount1 = clickCount1;
    vm.clickCount2 = clickCount2;

    function clickCount1() {
      vm.cat1Clik++;
    }

    function clickCount2() {
      vm.cat2Clik++;
    }

  }

  catsClickController.$inject = [];
  module.controller("catsClickController", catsClickController);

})(angular.module("catclick"));