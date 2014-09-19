$(document).ready(
    function(){
        // Adding home button
        $('#body').append(homeButtonWidget('#', ' + HOME '));

        // Adding navigation bar
        $('#navigationContainer').append(navigationWidget(
            ['PROJECTS', 'EXPERIENCE', 'AWARDS'],
            [ fillContentWithProjects,
              fillContentWithExperience,
              fillContentWithAwards ],
            ' // '
        ));

        // Adding in content
        fillContent('projects', '#contentContainer');
    }
);

var fillContentWithProjects = function(){
    $('#contentContainer').empty();
    $('#contentContainer').append(imageGridWidget(
        ['img/personality_visualizer_icon.png', 
         'img/quickSchedIcon.png',
         'img/eating_icon.png',
         'img/moodly_icon.png'],
        ['#', '#', '#', '#'],
        ['Breach / cs + design','quickSched / cs + design', 'Food Talk / visual design', 'Moodly site / cs + design'],
        ['2013', '2014', '2013', '2014']
    ));
}

var fillContentWithExperience = function(){
    $('#contentContainer').empty();
    $('#contentContainer').append($('<div>').text('experience'));
}

var fillContentWithAwards = function(){
    $('#contentContainer').empty();
    $('#contentContainer').append($('<div>').text('awards'));
}