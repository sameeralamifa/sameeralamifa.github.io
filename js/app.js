$(function() {
    var $sidebar = $('#sidebar-wrapper'),
        $menuCloseBtn = $('#menu-close'),
        $menuToggleBtn = $('#menu-toggle');

    function closeSidebar() {
        $sidebar.removeClass('active');
    }

    function openSidebar() {
        $sidebar.addClass('active');
    }

    function toggleSidebar() {
        $sidebar.toggleClass('active');
    }

    $menuCloseBtn.on('click', function(e) {
        e.preventDefault();
        closeSidebar();
    });

    $menuToggleBtn.on('click', function(e) {
        e.preventDefault();
        toggleSidebar();
    });

    $sidebar
        .find('li > a')
        .on('click', function(e) {
            closeSidebar();
        });

    $('a[href*=#]:not([href=#])').on('click', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);

            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                e.preventDefault();
            }
        }
    });

});