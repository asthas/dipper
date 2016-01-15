angular.module('app')
    .controller('formController',function($state) {

      var vm = this;

      vm.add = function() {
        console.log('before add', vm.range);
        vm.range.push(vm.range.length);
        console.log('after add', vm.range);
      }

      vm.remove = function() {
        if (vm.range.length == 1) {
          console.log('not doing anything', vm.range);
        } else {  
          console.log('before remove', vm.range);
          vm.range.splice(-1, 1);
          console.log('after remove', vm.range);
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

