/* 
  groupTypeArray[i] determines type of group with
  group data groupArray[i]

  0: vertical
  1: horizontal

  Requirement: len(groupArray) == len(groupTypeArray)
  TODO: This is sort of a janky function...better do it with templating like
  jade, etc.
*/
function textDisplayWidget(groupArray, groupTypeArray){
  var textDisplays = Array.create(
    function(i){   
        var group;   
        // If group is horizontal, create horizontal group
        if (groupTypeArray[i]){
          group = $('<div>').addClass('text')
            .addClass('text-horizontal-container');
        }
        // If group is vertical, create vertical group
        else {
          group = $('<div>').addClass('text')
            .addClass('text-vertical-container');
        }
        
        // Create an array of text-elements for each sub-group
        var elements = Array.create(
          function(j){
            // For each sub-group, create text-element
            var text_element = $('<div>').addClass('text-element');
            
            // Create array of subtitles to add to text-element
            var subtitles = Array.create(
              function(k){
                // For each line of text, create subtitle
                var subtitle = $('<div>').addClass('text-subtitle')
                  .text(groupArray[i][j][k]);

                return subtitle;

              }, 
              groupArray[i][j].length);

            text_element.append(subtitles);
            return text_element;
          }, 
          groupArray[i].length);

        group.append(elements);
        
        return group;

    },
    groupArray.length);

  return $('<div>').append(textDisplays);

}