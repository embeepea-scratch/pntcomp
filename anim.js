(function($) {

    function set_image(prefix, year, month, day) {
        $('#snapshot_image_620').attr('src', image_620_path(prefix, year, month, day));
    }

    function year_to_img_path(year) {
        return 'img-' + year + '.png';
    }

    var first_year = 1930;
    var last_year = 2010;

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
            'min' : 1930,
            'max' : 2010,
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
