
this.imagePreview = function(){	
	/* CONFIG */
		
		xOffset = 300;
		yOffset = -500;
		
		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result
		
	/* END CONFIG */
	$("a.preview").hover(function(e){
		this.t = this.title;
		this.title = "";	
		var c = (this.t != "") ? "<br/>" + this.t : "";

		$("body").append("<p id='preview' ><img src='"+ this.href +"' alt='Image preview' style = 'height : 400px;width = 600px;position: relative;z-index: 3;'/>"+ c +"</p>");								 
		$("#preview")
			.css("top",(e.pageY + xOffset) + "px")
			.css("left",(e.pageX - yOffset) + "px")
			.fadeIn("fast");
							
    },
	function(){
		this.title = this.t;	
		$("#preview").remove();
    });	
	$("a.preview").mousemove(function(e){
		$("#preview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};


// starting the script on page load
$(document).ready(function(){
	imagePreview();
});