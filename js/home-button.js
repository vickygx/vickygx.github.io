function homeButtonWidget(link, text){
	return $("<div>")
        .addClass("homebutton")
        .click(function(){
        	window.location = link;
        })
        .text(text);
}