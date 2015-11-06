$(function() {
    var $body = $('body'),
        $sidebar = $('#sidebar-wrapper'),
        $menuCloseBtn = $('#menu-close'),
        $menuToggleBtn = $('#menu-toggle');

    function closeSidebar() {
        $sidebar.removeClass('active');
        $body.off('click.sidebar');
    }

    function openSidebar() {
        $sidebar.addClass('active');
        $body
            .off('click.sidebar')
            .on('click.sidebar', closeSidebar);
    }

    function toggleSidebar() {
        if ($sidebar.hasClass('active')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    function scrollTo(target, time) {
        if (!target || !target.length) {
            return;
        }
        if (typeof time === 'undefined') {
            time = 500;
        }
        $('html,body').animate({
            scrollTop: target.offset().top
        }, time);
    }

    $menuCloseBtn.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeSidebar();
    });

    $menuToggleBtn.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
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
                scrollTo(target)
                // e.preventDefault();
            }
        }
    });

    setTimeout(function() {
        scrollTo($(window.location.hash));
    }, 1000);
});