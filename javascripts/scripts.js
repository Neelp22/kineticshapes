var app = {

	initialize: function(){
		
		app.width = document.width
		app.height = document.height
		app.radius = 400


		app.colors = ["#4F4046","#09B5E3","#00E18F","#F32CCF","#FFDE00","#B3FF00","#007BFD","#8A39DC","#FB01FF","#FD012A"];


		app.stage = new Kinetic.Stage({
			container: "main_container",
			width: app.width,
			height: app.height,
			radius: app.radius
		})
		app.layer = new Kinetic.Layer();

		app.make.polygon(app.width,app.height,200,app.radius)
	},

	make: {
		polygon: function(width, height, step, radius){

			if (width <= 0 || height <= 0) {
				app.stage.add(app.layer)
			} else {
				var box = new Kinetic.RegularPolygon({
					sides: Math.floor(Math.random()*10),
					x: Math.floor(Math.random()*1000),
					y: Math.floor(Math.random()*1000),
					radius: radius,
					width: width,
					height: height,
					stroke: "black",
					strokeWidth: 2,
					fill: app.colors[Math.floor(Math.random()*10)]
				})
				app.layer.add(box)
				return app.make.polygon(width-step,height-step,radius-step, step)

		}
		// squares: function(width,height,step){
			
		// 	if (width <= 0 || height <= 0) {
		// 		app.stage.add(app.layer)
		// 	} else {
		// 		var box = new Kinetic.Rect({
		// 			x: 0,
		// 			y: 0,
		// 			width: width,
		// 			height: height,
		// 			stroke: "black",
		// 			strokeWidth: 2,
		// 			fill: app.colors[Math.floor(Math.random()*10)]
		// 		})
		// 		app.layer.add(box)
		// 		return app.make.squares(width-step,height-step,step)

		// 	}
			

			
		}
	}

};

$(function(){
	setInterval(app.initialize, 1000);

});