angular.module('app')
    .controller('formController',function($state) {

      var vm = this;
      vm.users = [];

      vm.update = function(user) {
        vm.users.push(user); 
        console.log(vm);
      };

      vm.reset = function() {
        vm.user = angular.copy(vm.master);
      };

      vm.reset();
    });

