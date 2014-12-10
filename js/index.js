var vert = 0;
var hori = 1;

$(document).ready(
    function(){
        // Adding home button
        $('#body').append(homeButtonWidget('#', ' + VICKYG ', 
            function(e){
                fillContentWithAbout();
            }));

        // Adding navigation bar
        $('#navigationContainer').append(navigationWidget(
            ['ABOUT', 'PROJECTS', 'EXPERIENCE', 'AWARDS'],
            [ fillContentWithAbout,
              fillContentWithProjects,
              fillContentWithExperience,
              fillContentWithAwards ],
            ' // '
        ));

        fillContentWithProjects();
    }
);

var fillContentWithProjects = function(){
    $('#contentContainer').empty();
    $('#contentContainer').append(imageGridWidget(
        ['img/zhift_icon.png',
         'img/fritter_icon.png',
         'img/medimage_icon.png',
         'img/moodly_icon.png',
         'img/quickSchedIcon.png',
         'img/eating_icon.png',
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
        ['Zhift / cs + design',
         'Fritter / cs + design',
         'MedImage / search + tag + design',
         'Moodly site / cs + design',
         'quickSched / cs + design', 
         'Food Talk / visual design', 
         'Breach / cs + design'
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
