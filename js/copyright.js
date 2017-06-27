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