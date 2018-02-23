$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.subsection.wtul');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		
		$this.toggleClass('open');
		// $this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);

	$('#close-message').click(function(){
	   note = document.getElementById("note");
	   note.style.display = 'none';
	});


// $(function() {
//   $.fx.interval = 0;
//   (function cycleBgImage(elem, bgimg) {
//     // `elem`:`#slideshow`
//     // set, reset, delay to `1000` after background image reset
//     elem.css("backgroundImage", bgimg)
//       // fade in background image
//       .fadeTo(1000, 1, "linear", function() {
//         // fade in background image
//         $(this).delay(1000, "fx").fadeTo(1000, 0, "linear", function() {
//           // split background image string at comma , creating array
//           var img = $(this).css("backgroundImage").split(","),
//             // concat first background image to `img` array,
//             // remove first background image from `img` array
//             bgimg = img.concat(img[0]).splice(1).join(",");
//           // recursively call `cycleBgImage`
//           cycleBgImage(elem, bgimg);
//         });
//       });
//   }($(".photosocialbg")));
// });

    'use strict';

    var $slides = $('[data-slides]');
    var images = $slides.data('slides');
    var count = images.length;
    var slideshow = function() {
        $slides
            .css('background-image', 'url("' + images[Math.floor(Math.random() * count)] + '")')
            .show(0, function() {
                setTimeout(slideshow, 5000);
            });
    };

    slideshow();

});
