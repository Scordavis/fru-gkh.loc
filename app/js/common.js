$(function() {

	// Custom JS
  // hover dropdown
  $('.js-dropdown')
  .mouseover(function() {
    $( this ).parent().find( '.nav-dropdown__content' ).show(300)
  })
  .mouseleave(function() {
    $('.nav-dropdown__content').hide(100)
  });

  $('.js-dropdown-form').click(function() {
  	$('.nav-dropdown__content--form').toggle();
	});

  // navbar hamburger

    $('.hamburger').click(function() {
	  	$('.js-navbar').toggleClass('nav-show');
	});

// accordion
	var Accordion = function(el, multiple) {
				this.el = el || {};
				this.multiple = multiple || false;

				var links = this.el.find('.user-readings__button');
				links.on('click', {
						el: this.el,
						multiple: this.multiple
				}, this.dropdown)
		}

		Accordion.prototype.dropdown = function(e) {
				var $el = e.data.el;
				$this = $(this),
						$next = $this.next();

				$next.slideToggle();
				$this.parent().toggleClass('open');

				if (!e.data.multiple) {
						$el.find('.user-readings__content').not($next).slideUp().parent().removeClass('open');
				};
		}
		var accordion = new Accordion($('.user-readings__container'), false);






});
