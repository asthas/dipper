angular.module('app')
    .controller('formController',function($state) {

      var vm = this;

      vm.range = function() {
        var arr = [];
        for (i = 0; i < vm.count; ++i) {
          arr.push(i);
        }
        console.log(arr);
        return arr;
      }

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
        vm.addresses = [];
        vm.count = 1;     
      };

      vm.reset();
    });

