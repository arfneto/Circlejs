	fillCircles(nCircles,circles);
	console.log("[" + circles.toString() + "]");
	console.log(getRandomColor());
	circles.forEach
	(
		function(one)
		{
			// draw this one
			var x = one % 100;
			var y = Math.floor(one div 100);
			console.log("circle " + one + ": (" + x + "," + y + ")");
			//new Path.Circle(new Point(x, y), 10).fillColor = "yellow";
		}	// end function()
	);	// end forEach

	var function fillCircles(nCircles, circles)
	{
		for(var ix = 0;(ix<nCircles); ix++)	{ circles[ix]=ix; };
		for(var temp = 0,range = nCircles, target=0; target<(nCircles-1); target++, range--)
		{
			var origin = target + Math.floor(Math.random() * range);
			temp = circles[target];
			circles[target] = circles[origin];
			circles[origin] = temp;
		}	//	end for 
	};	// end function()

	function getRandomColor()
	{
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	};	// end function()

