'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
   .controller('MainCtrl', function ($scope) {
 
   $scope.todos = [];
 
   $scope.addTodo = function () {
     $scope.todos.push($scope.todo);
     $scope.todo = '';
   };
 
   $scope.removeTodo = function (index) {
     $scope.todos.splice(index, 1);
   };  
});
// angular.module('projectApp',[ 
// 	'ngCookies',
// 	'ngResource',
// 	'ngSanitize',
// 	'ngRoute',
// 	'ui.sortable',
// 	'LocalStorageModule'
// ]).config(['localStorageServiceProvider', function(localStorageServiceProvider){
//      localStorageServiceProvider.setPrefix('ls');
// }]).config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//           templateUrl: 'views/main.html',
//           controller: MainCtrl
//       })
//       .otherwise({
//           redirectTo: '/'
//       });
// });
// function MainCtrl($scope,localStorageService) {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//  	var todosInStore = localStorageService.get('todos');
 
//      $scope.todos = todosInStore && todosInStore.split('\n') || [];
//  	console.log($scope.todos)
//      $scope.$watch('todos', function () {
//        localStorageService.add('todos', $scope.todos.join('\n'));
//      }, true);
//     $scope.addTodo = function () {
//        $scope.todos.push($scope.todo);
//        $scope.todo = '';
//     };
// 		$scope.removeTodo = function (index) {
//     	$scope.todos.splice(index, 1);
// 	};
// };
