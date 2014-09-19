/* 
	imageArray[i] maps to textArray[i]

	Requirement: len(imageArray) == len(textArray)
*/
function imageGridWidget(imageArray, linkArray, textArray, dateArray){
	var grid = Array.create(
		function(i){
			var parentDiv = $('<div>').addClass('grid-element');
			
			// Creating image child element
			var imageDiv = $('<img>')
				.addClass('grid-element-img')
				.click(
					function(){
						window.location = linkArray[i];
					}
				)
				.attr('src', imageArray[i]);

			// Creating optional text child element
			var textDiv = null;
			if (textArray !== undefined){
				textDiv = $('<div>')
					.addClass('grid-element-text')
					.text(textArray[i]);

				if (dateArray !== undefined){
					textDiv.append('<br>');
					textDiv.append( $('<span>')
						.addClass('grid-element-date')
						.text( dateArray[i])
					);
				}
			}
			
			parentDiv.append(imageDiv);
			if (textDiv !== null){
				parentDiv.append(textDiv);	
			}
			
			return parentDiv;
		},
		imageArray.length
	);

	return $('<div>').append(grid);
}