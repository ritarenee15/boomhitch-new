// Menu Collapse
function menuCollapse() {
    var x = document.getElementById("bottom-nav-bar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


// Store image url and apply to modal div src
function getInfo() {
  const items = document.querySelectorAll('.image');
  let result="";
  items.forEach((item) => {
    const url = item.style.backgroundImage
    result += `
    <div class="mySlides">
        <div class="numbertext">1 / 6</div>
        <img src="${url.replace(/^url\(["']?/, '').replace(/["']?\)$/, '')}">
    </div>
    `
  });
  document.getElementById("modalContent").innerHTML = result
}


// Interior Portfolio Page Modal
  function openModal() {
    getInfo();
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
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