const btnContactUs = document.querySelector(".header .header-nav button");
const iconSideBar = document.querySelector(".header-sm .icon-bar");
const iconXmark = document.querySelector(".header-sm .icon-xmark");
const headerNavSm = document.querySelector(".header-sm .header-nav");

btnContactUs.addEventListener("click", () => {
  window.location.href = "../contact.html";
});

function toggleHeaderNavSm() {
  headerNavSm.classList.toggle("active");
}

iconSideBar.addEventListener("click", toggleHeaderNavSm);
iconXmark.addEventListener("click", toggleHeaderNavSm);

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
