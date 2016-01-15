angular.module('app')
    .controller('formController',function($state) {

      var vm = this;

      vm.add = function() {
        vm.range.push(vm.range.length);
      }

      vm.remove = function() {
        if (vm.range.length == 1) {
        } else {  
          vm.range.splice(-1, 1);
        }
      }

      vm.update = function() { 
        console.log(vm);
      };

      vm.reset = function() {
        vm.addresses = [];
        vm.range = [0];     
      };

      vm.reset();
    });

