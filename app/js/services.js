'use strict';

/* Services */


// Demonstrate how to register services
<<<<<<< HEAD
// In this case it is a simple value service or http service.

//loading data from the server
/* 1. create a new module say ---> vchatLoaderApp.service  
   2. register a service within the module ---> vchat-serverAPIservice
   3. pass $http as a parameter to the service
   */ 

angular.module('vchatLoaderApp.services', [])
  factory('vchatAPI', function($http){
     var vchatAPI = {};
	 vchatAPI.getStream = function(){
	 return $http ({
	   method: 'JSON',
	   url:
	   'http://vchat-liveperson.com/api/chat/stream.json.callback=JSON_CALLBACK'
	 });
	 }
  }
     return vchatAPI;
  );
=======
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');
>>>>>>> 73c92225393e208318f6c82e9215791fe4b8d7f2
