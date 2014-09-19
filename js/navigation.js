/* 
	textArray[i] maps to linkArray[i]

Requirement: len(textArray) == len(linkArray)
*/
function navigationWidget(textArray, clickArray, delimeter){
	// An array of DOM nodes for the navigation elements
    var navLinks = Array.createWithDelimeters(
    	function(i){
    		return $('<div>')
    			.addClass('navigation-item')
    			.click(clickArray[i])
    			.text(textArray[i]);
    	},
    	function(i){
    		return $('<span>')
    			.addClass('navigation-delim')
    			.text(delimeter);
    	}, 
    	textArray.length);

    return $('<div>').append(navLinks);
}