/* Details at Davidnbrooks.com/projects/responsif */

var responsive = (function ($, window) {
    'use strict';
    /*jslint browser: true, devel: true */
    $('document').ready(function () {
        responsive.init();
    });
    return {
        init: function () {
            // This is an initial set of things for when the page loads
            responsive.setup_test();
        },
        make_desktop: function () {
            $('body').removeClass('responsive_mobile responsive_tablet').addClass('responsive_desktop');
        },
        make_mobile: function () {
            $('body').removeClass('responsive_desktop responsive_tablet').addClass('responsive_mobile');
        },
        make_tablet: function () {
            $('body').removeClass('responsive_desktop responsive_mobile').addClass('responsive_tablet');
        },
        run_test: function () {
            var test, result;
            test = parseInt($('#responsive_tester').css('z-index'), 10);
            switch (test) {
            case 3:
                responsive.make_desktop();
                result = 'desktop';
                break;
            case 2:
                responsive.make_tablet();
                result = 'tablet';
                break;
            case 1:
                responsive.make_mobile();
                result = 'mobile';
                break;
            }
            return result;
        },
        setup_test: function () {
            var tester = '<div id="responsive_tester"></div>';
            $('body').append(tester);
            responsive.run_test();
            responsive.watch_test();
        },
        watch_test: function () {
            window.onresize = function () {
                responsive.run_test();
            };
        }
    };
}(jQuery, this));
