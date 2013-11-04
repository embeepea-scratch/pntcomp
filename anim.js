(function($) {

    function year_to_img_path(year) {
        return 'data/final/22year-anomaly-images/' + year + '.png';
    }

    var first_year = 1916;
    var last_year = 2012;

    function preload_images() {
        var images, syear;
        for (i=first_year; i<=last_year; ++i) {
            syear = "" + year;
            images[syear] = new Image();
            images[syear].src = year_to_img_path(year);
        }
    }

    $('document').ready(function() {
        $('#yearslider').slider({
            'min' : 1916,
            'max' : 2012,
            'change' : function(event, ui) {
                console.log('change');
            },
            'slide' : function(event, ui) {
                var year = $(this).slider('value');
                $('#animimg').attr('src', year_to_img_path(year));
            }
        });


    });
    
}(jQuery));
