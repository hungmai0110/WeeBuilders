const btnContactUs = document.querySelector(".header .header-nav button");

btnContactUs.addEventListener("click", () => {
  window.location.href = "../contact.html";
});

// slick
$(".customer-staff-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});

$(".solution-list").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  centerMode: true,
  centerPadding: "150px",
});
