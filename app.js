angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url:'/',
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
    $urlRouterProvider.otherwise('/');
  })


