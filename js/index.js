var vert = 0;
var hori = 1;

$(document).ready(
    function(){
        // Adding home button
        /*
        $('#body').append(homeButtonWidget('#', ' + VICKYG ', 
            function(e){
                fillContentWithAbout();
            }));
        */
        // Adding navigation bar
        /*
        $('#navigationContainer').append(navigationWidget(
            ['ABOUT', 'PROJECTS', 'EXPERIENCE', 'AWARDS'],
            [ fillContentWithAbout,
              fillContentWithProjects,
              fillContentWithExperience,
              fillContentWithAwards ],
            ' // '
        ));
        */

        fillContentWithProjects();
    }
);

var fillContentWithProjects = function(){
    // $('#contentContainer').empty();
    $('#projects').append(imageGridWidget(
        ['img/zhift_icon.png',
         'img/fritter_icon.png',
         'img/medimage_icon.png',
         'img/moodly_icon.PNG',
         'img/quickSchedIcon.PNG',
         'img/eating_icon.PNG',
         'img/personality_visualizer_icon.png'
        ],
        ['http://zhift-seropian.rhcloud.com/',
         'http://fritter-vickyg.rhcloud.com', 
         'http://medimage-calvinli.rhcloud.com',
         'http://mit.edu/vickyg/www/Moodly_Website',
         'http://mit.edu/vickyg/www/quickSched', 
         '#', 
         '#'
        ],
        ['Zhift / shift manager',
         'Fritter / fake twitter',
         'MedImage / medical image app',
         'Moodly site / google glass',
         'quickSched / scheduling', 
         'Food Talk / infographic', 
         'Breach / reflector'
        ],
        ['2014', '2014', '2014', '2014', '2014', '2013', '2013']
    ));
}

var fillContentWithExperience = function(){
    $('#contentContainer').empty();
    $('#contentContainer').append($('<h3>')
        .text('Most Recent'));
    $('#contentContainer').append(textDisplayWidget(
        [ [
            ['Pinterest', 'Growth Software Engineer', '2014']
          ]
        ],
        [vert]
    ));

    $('#contentContainer').append($('<a>')
        .attr('href', 'img/resume.pdf')
        .text('full resume'));
}

var fillContentWithAwards = function(){
    $('#contentContainer').empty();
    $('#contentContainer').append(textDisplayWidget(
        [ [
            ['To Be Updated', 'Check Experience']
          ]
        ],
        [vert]
    ));
}

var fillContentWithAbout = function(){
    $('#contentContainer').empty();
    $('#contentContainer').append($('<img>')
        .attr('src', 'img/me.JPG')
        .addClass('profile-picture'));
    $('#contentContainer').append(textDisplayWidget(
        [ [
            ['Vicky Gong', 'MIT - Computer Science - 2016']
          ],
          [
            ['Contact', 'vickygx@github.com', 'vickyg@mit.edu']//,
            // ['Info 2', 'lala', 'lala 2']
          ]
        ],
        [vert, hori]
    ));

}
