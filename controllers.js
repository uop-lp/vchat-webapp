'use strict';

/* Controllers */


angular.module('vchatApp.controllers', [])
  .controller('vchatController', ['$scope', function($scope) {
    $scope.streamFrame = [{
	
	//setting stream source for the three browser types
	    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetMedia;   
		
		var constraints = {
		    video: true, 
			audio: true,
			 };
		
		//Succes callback when requesting video
		function successCallback(localMediaStream){
		  windo.stream = localMediaStream; //gets stream to console
		          var video = document.querySelector("video");
				  video.src = window.URL.createObjectURL(localMediaStream);
				  video.play();
		}
		function errorCallback(error){
		   console.log("navigator.getUserMedia error: ", error);
		}
		
		//succes callback when requesting audio input stream
        function gotStream(stream){
        var audioContext = new webkitAudioContext();
  
        //create an AudioNode from the stream
        var mediaStreamSource = audioContext.createMediaStreamSource(stream); 
   
        //Connect it to the destination or any other node for procesing!
        mediaStreamSource.connect(audioContext.destination);
     }
  navigator.webkitGetUserMedia({audio: true}, gotStream);
  navigator.getUserMedia(constraints, successCallback, errorCallback);
		
	}];
	
	$scope.low = [{ 'low resolution settings',
          video: {
	         mandatory: {
	           maxWidth: 320,
		       maxHeight: 380
	   }
	 }
 };
	];
	$scope.med = [{ 'medium resolution settings',
          video: {
	         mandatory: {
	           maxWidth: 640,
		       maxHeight: 360
	   }
	 }
 };
	];
	$scope.high = [{ 'high resolution settings',
          video: {
	         mandatory: {
	           minWidth: 3280,
	           minHeight: 720
	   }
	 }
 };
	];
	
	$scope.high = [{ 'high resolution settings',
          video: {
	         mandatory: {
	           minWidth: 3280,
	           minHeight: 720
	   }
	 }
 };
	];
	// capture screen from browser
	$scope.screen = [{ 'capture screen',
          video: {
             mandatory: {
	            chromeMediaSource: 'screen'
	  }
   }
 };
	];
  }])
  
  .controller('myCtrl-2', ['$scope', function($scope) {
    $scope.data = [];
  }]);

