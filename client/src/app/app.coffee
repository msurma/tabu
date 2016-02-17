angular.module('tabu', [
  'tabuUI'
  'tabuApp'
  'ngRoute'
  'ngAnimate'
])
.config ($routeProvider) ->
  'use strict'
  $routeProvider
    .when '/',
      controller: 'roomListCtrl'
      templateUrl: '/tabuUI/templates/roomList.html'
    .otherwise
      redirectTo: '/'
