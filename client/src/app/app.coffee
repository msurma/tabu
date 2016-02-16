angular.module('tabu', [
  'ngRoute'
  'tabu.todo'
])
.config ($routeProvider) ->
  'use strict'
  $routeProvider
    .when '/todo',
      controller: 'TodoCtrl'
      templateUrl: '/tabu/todo/todo.html'
    .otherwise
      redirectTo: '/todo'

