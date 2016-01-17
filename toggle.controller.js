angular.module('app')
.controller('ButtonCtrl', function(){
	var vm = this;
	vm.menu = true;
	vm.toggleMenu = function() {
		vm.custom === false ? true : false;
	}
})