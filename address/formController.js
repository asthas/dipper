angular.module('app')
    .controller('formController',function($state) {

      var vm = this;

      vm.add = function() {
        vm.range.push(vm.range.length);
      }

      vm.remove = function() {
        if (vm.range.length == 1) {
        } else {  
          vm.range.pop();
          var removed = vm.addresses.pop();
          console.log('Removed Address:');
          console.group();
          console.log(removed);
          console.groupEnd();
        }
      }

      vm.update = function() {
        console.log('Addresses entered:');
        vm.addresses.forEach(function(address, i) {
          console.group();
          console.log('Address #', i + 1);
          console.log(address);
          console.groupEnd();
        })
        console.log();
      };

      vm.reset = function() {
        vm.addresses = [];
        vm.range = [0];     
      };

      vm.reset();
    });

