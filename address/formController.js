angular.module('app')
    .controller('formController',function($state) {

      var vm = this;
      vm.addresses = [];

      vm.update = function() { 
        console.log(vm);
      };

      vm.reset = function() {
        vm.addresses = []     
      };

      vm.reset();
    });

