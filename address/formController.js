angular.module('app')
    .controller('formController',function($state) {
      state.go('addressDetails')
      var vm = this;
      vm.master = {};

      vm.update = function(user) {
        vm.master = angular.copy(user);
      };

      vm.reset = function() {
        vm.user = angular.copy(vm.master);
      };

      vm.reset();
    });