Reveal.addEventListener('slidechanged', function (event) {
  var presentationTitle = event.currentSlide.dataset.presentTitle;
  var presentationTitleElement = document.getElementById('presentation_title');

  if (presentationTitle === undefined || presentationTitle === '') {
    presentationTitleElement.classList.remove('active');
    presentationTitleElement.innerHTML = '';
  } else {
    presentationTitleElement.classList.add('active');
    presentationTitleElement.innerHTML = presentationTitle;
  }
});