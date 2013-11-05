var app = {

	initialize: function(){
		
		app.width = document.width
		app.height = document.height

		app.colors = ["#4F4046","#8CBEB2","#EBE4B3","#F3B557","#F05B47","#4F4046","#8CBEB2","#EBE4B3","#F3B557","#F05B47"];


		app.stage = new Kinetic.Stage({
			container: "main_container",
			width: app.width,
			height: app.height
		})
		app.layer = new Kinetic.Layer();

		app.make.squares(app.width,app.height,20)
	},

	make: {
		circles: function(){

		},
		squares: function(width,height,step){
			
			if (width <= 0 || height <= 0) {
				app.stage.add(app.layer)
			} else {
				var box = new Kinetic.Rect({
					x: 0,
					y: 0,
					width: width,
					height: height,
					stroke: "black",
					strokeWidth: 2,
					fill: app.colors[Math.floor(Math.random()*10)]
				})
				app.layer.add(box)
				return app.make.squares(width-step,height-step,step)

			}
			

			
		}
	}

}

$(function(){
	app.initialize()
})