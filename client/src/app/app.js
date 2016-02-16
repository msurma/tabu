
angular.module('tabu', [
  'ngRoute',
  'tabu.todo'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/tabu/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
