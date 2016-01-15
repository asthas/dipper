angular.module('app')
    .controller('formController',function($state) {

      var vm = this;
      vm.count = 1;
      vm.addresses = [];

      vm.add = function() {
        vm.count += 1;
      }

      vm.remove = function() {
        vm.count -= 1;
      }

      vm.update = function() { 
        console.log(vm);
      };

      vm.reset = function() {
        vm.addresses = []     
      };

      vm.reset();
    });

