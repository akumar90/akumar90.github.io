jQuery(
	function($){
		'use strict';
		(function(){
			$('#preloader').delay(200).fadeOut('slow');
		}());
		$('.left-col-block, .right-col-block').theiaStickySidebar();
	});

 
    var selectedClass = "";
    $(".fil-cat").on('click', function () {
        $(".fil-cat").removeClass('active');
        $(this).addClass('active');
        selectedClass = $(this).attr("data-rel");
        $(".lrs-projects").fadeTo(100, 0.1);
        $(".lrs-project").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $(".lrs-projects").fadeTo(300, 1);
        }, 300);

    });

    $('[data-toggle="modal"]').click(function() {
        $('html').addClass('overflow-hidden')
    });
    $('.modal').on('hidden.bs.modal', function () {
        $('html').removeClass('overflow-hidden')
    });

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
  });

    $(".nav a").on("click", function()
    {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
});