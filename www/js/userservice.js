angular.module('starter')

.factory.module('UserService', function($resource){
  return $resource('http://192.168.178.45/task_manager/v1/register/');
})
