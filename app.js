angular.module('app', ['ngMap', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url:'/home',
        templateUrl: 'home/home.html'
      })
      .state('addressDetails', {
        url: '/addressDetails',
        templateUrl: 'address/form.html',
        controller: 'formController'
      })
      .state('getLocation', {
        url: '/getLocation',
        templateUrl: 'map/map.html'
      })

  });
