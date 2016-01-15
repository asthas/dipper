angular.module('app')
    .controller('formController',function($state) {

      var vm = this;

      vm.add = function() {
        vm.addresses.push({});
      }

      vm.remove = function() {
        if (vm.addresses.length == 1) {
        } else {
          var removed = vm.addresses.pop();
          console.log('Address removed:');
          console.group();
          console.log(removed);
          console.groupEnd();
        }
      }

      vm.update = function() {
        console.log('Addresses entered:');
        console.group();
        vm.addresses.forEach(function(address, i) {
          console.log('Address #', i + 1);
          console.log(address);
        })
        console.groupEnd();
        console.log();
      };

      vm.reset = function() {
        vm.addresses = [{}];
      };

      vm.reset();
    });

