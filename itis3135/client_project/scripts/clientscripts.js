// Contact form scripts
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    
    event.preventDefault(); // Stop actual submission

  const name = form.name.value.trim();
  const number = form.number.value.trim();
  const service = form.service.value.trim();
  if (name === '' || number === '' || service === '') {
    alert('Please fill out all fields!');
  } else {
    alert('Form submitted successfully!');
    
    // Clear the form fields after successful submission
    form.name.value = '';
    form.number.value = '';
    form.service.value = '';
  }
});


// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  const zoomItems = document.querySelectorAll('.zoomstart');

  zoomItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      if (!item.classList.contains('clicked')) {
        item.classList.add('hovered');
      }
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('hovered');
      item.classList.remove('clicked'); // Reset click lock when mouse leaves
    });

    item.addEventListener('click', () => {
      item.classList.remove('hovered');
      item.classList.add('clicked');
    });
  });
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }