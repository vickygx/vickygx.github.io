function homeButtonWidget(link, text, clickfn){
	return $("<div>")
        .addClass("homebutton")
        .click(clickfn)
        .text(text);
}