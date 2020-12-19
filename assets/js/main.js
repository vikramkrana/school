function myFunction() {
    var x = document.getElementById("mobileMenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    center: true,
    responsive: {
      0: {
        items: 3,
      },
      767: {
        items: 4,
      },
      1024: {
        items: 5,
      },
      1200: {
        items: 5,
      },
    },
  });