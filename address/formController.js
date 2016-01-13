angular.module('app')
    .controller('formController',function($state) {

      var vm = this;
      vm.master = {};

      vm.update = function(user) {

        vm.master = angular.copy(user); //no paglu :D
        console.log(vm, user);
      };

      vm.reset = function() {
        vm.user = angular.copy(vm.master);
      };

      vm.reset(); //what is view model any variable name
    });