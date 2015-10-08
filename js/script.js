//For menu
$(function(){
    var stickyHeaderTop = $('#stickyheader').offset().top;
    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('#stickyheader').css({position: 'fixed', top: '0px'});
        } else {
            $('#stickyheader').css({position: 'static', top: '0px'});
        }
    });

    // Megamenu
    $('#menu_child #mn_left ul >li:first-child').addClass('menu_child_hover');

    $('#menu_child #mn_left ul >li').mouseover(function(){
        $('#menu_child #mn_left ul li').removeClass('menu_child_hover');
        $(this).addClass('menu_child_hover');
    });
    //Toggle menu
    jQuery(document).ready(function($) {
        $('.toggle-menu').jPushMenu();
    });

    //Mobile nav tabs

        $("#nav_tab li a").click(function() {

            $("#ajax-content").empty().append("<div id='loading'><img src='images/loading.svg' alt='Loading' /></div>");
            $("#nav_tab li a").removeClass('current');
            $(this).addClass('current');

            $.ajax({ url: this.href, success: function(html) {
                $("#ajax-content").empty().append(html);
            }
            });
            return false;
        });

        $("#ajax-content").empty().append("<div id='loading'><img src='images/loading.svg' alt='Loading' /></div>");
        $.ajax({ url: 'tab1.html', success: function(html) {
            $("#ajax-content").empty().append(html);
        }
        });

});

