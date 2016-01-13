angular.module('app')
	.controller('NavController', function () {
        var vm = this;
        vm.nav = 1;

        vm.setNav = function (navId) {
            vm.nav = navId;
        };

        vm.isSet = function (navId) {
            return vm.nav === navId;
        };
    });