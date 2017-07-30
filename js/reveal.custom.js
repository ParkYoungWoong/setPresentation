// View Copyright.
(function (window, document, $) {
  $(document).ready(function () {
    Reveal.addEventListener('first_page', function() {
      $.ajax({
        url: '/copyright.html',
        dataType: 'html',
        success: function (data) {
          $('#copyright').html(data);
        }
      });
    });
  });
}(window, document, jQuery));


// Slide change event.
(function (window, document) {
  Reveal.addEventListener('slidechanged', function (event) {
    var presentationTitle = event.currentSlide.dataset.presentTitle;
    var presentationTitleElement = document.getElementById('presentation_title');

    // if there is no '#presentation_title' element in the global slide area, exits a function.
    if (!presentationTitleElement) return;

    if (presentationTitle === undefined || presentationTitle === '') {
      presentationTitleElement.classList.remove('active');
      presentationTitleElement.innerHTML = '';
    } else {
      presentationTitleElement.classList.add('active');
      presentationTitleElement.innerHTML = presentationTitle;
    }
  });
}(window, document));