(function($){
	$.fn.flexBackground = function(options){
	'use strict';

		/**------------------ SETTING PARAMETERS ------------------**/
		

		var height;
		var width;
		var points = 800;

		var numberOfPoints = 200;
		var radius = 1;
		var interval = 50;
		var color = {r:256, g:256, b:256};
		
		var config = {};
		if(options){
			$.extend(config, options);
		}
		
		
		
		
		/**------------------ BEGIN FUNCTION BODY ------------------**/
		
		
		
			var selector = $(this);
			var selectorCan = $(this).find("canvas");
			
			if(config.numberOfPoints)
				points = parseInt(config.numberOfPoints, 10);
			
			if(config.radius)
				radius = parseInt(config.radius, 10);
			
			if(config.interval)
				interval = parseInt(config.interval, 10);
			
			if(config.color){
				var regExp = new RegExp("\\d+", "g");
				color.r = regExp.exec(config.color);
				color.g = regExp.exec(config.color);
				color.b = regExp.exec(config.color);
			}
			
			/**------------------------------------------------  SETTING FUNCTIONS ------------------------------------------------- **/

			width = selector.width();
			height = selector.height();
			
			selectorCan.attr('height', height);
			selectorCan.attr('width', width);
			
			var canvas = selectorCan[0];
			var ctx = canvas.getContext("2d");

			var snow = new Array();

			function refresh(){
				width = selector.width();
				height = selector.height();
				
				selectorCan.attr('height', height);
				selectorCan.attr('width', width);
				
				for(var i = 0; i < points; i++){
					var tempVar;
					 snow[i] = {posX:100, posY:100, initialX:100, initialY:100, radius : 3, opacity : .5, initialOpacity: .5};
					 snow[i].posX = width * Math.random();
					 snow[i].posY = height * Math.random();
					  snow[i].initialX =  snow[i].posX;
					  snow[i].initialY =  snow[i].posY;
					 snow[i].radius = Math.random()*radius;
					 snow[i].opacity = Math.random();
					 snow[i].initialOpacity = snow[i].opacity;

				 }
			}
			
			function createSnow(snowID){
				ctx.beginPath();
				
				ctx.arc(snow[snowID].posX, snow[snowID].posY, snow[snowID].radius, 0, 2 * Math.PI, false);

				ctx.fillStyle = "rgba(" + color.r + "," + color.g + "," + color.b + "," + snow[snowID].opacity + ")";
				ctx.fill();
				ctx.closePath();
				
				snow[snowID].posX = snow[snowID].posX - (width/2 - snow[snowID].posX)/200;
				snow[snowID].posY = snow[snowID].posY - (height/2 - snow[snowID].posY)/200;
				snow[snowID].radius += .02;
								
				if(snow[snowID].posX < 0 || snow[snowID].posY < 0 || snow[snowID].posX > width || snow[snowID].posY > height){
					snow[snowID].posX = snow[snowID].initialX;
					snow[snowID].posY = snow[snowID].initialY;
					snow[snowID].radius = 0;
				}
				
				if(snow[snowID].radius > 2){
					if(snow[snowID].opacity >= 0){
						snow[snowID].opacity -= .05;
					}else{
						snow[snowID].posX = snow[snowID].initialX;
						snow[snowID].posY = snow[snowID].initialY;
						snow[snowID].radius = 0;
						snow[snowID].opacity = snow[snowID].initialOpacity;
					}
				}
				
			}
			
						
			function setBackground(){
									
				ctx.clearRect(0, 0, width, height);
				
				for(var i = 0; i < points; i++){
					createSnow(i);
				}

			}
			
			refresh();
			setInterval(setBackground, interval);

			$(window).resize(function(){
				refresh();
			})

		
	}
})(jQuery)
