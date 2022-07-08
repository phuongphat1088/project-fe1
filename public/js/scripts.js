// Chuyển đổi tab-pane khi click vào tab-link tương ứng
const tabLinks = document.querySelectorAll(".tab-link");
const tabPanes = document.querySelectorAll(".tab-pane");
tabLinks.forEach((element, index) => {
  const tabPane = tabPanes[index]; //gán chỉ mục tương ứng
  element.addEventListener("click", (e) => {
    //tìm và xoá class active trước đó
    tabLinks.forEach((ele) => {
      ele.classList.remove("active");
    });
    // thêm class active vào nút hiện tại
    e.target.classList.add("active");

    //tìm và xoá class active trước đó
    tabPanes.forEach((ele) => {
      ele.classList.remove("active");
    });
    // thêm class active vào nút hiện tại
    tabPane.classList.add("active");
  });
});

// Thêm class .announcement-bar-closed vào class .announcement-bar khi click vào nút có class .close-announcement-bar
const btnClose = document.querySelector(".close-announcement-bar");
btnClose.addEventListener("click", function () {
  $(".announcement-bar").addClass("announcement-bar-closed");
});

// Xoá và thêm class active khi click các nút khác
const btnNav = document.querySelectorAll(".nav-link");
btnNav.forEach((element) => {
  element.addEventListener("click", (e) => {
    btnNav.forEach((ele) => {
      //xoá class active ban đầu
      ele.classList.remove("active");
    });
    // thêm class active vào nút hiện tại
    e.target.classList.add("active");
  });
});

// Hiện ra Navigation Bar Sticky khi cuộn cửa sổ trình duyệt
$(window).scroll(function () {
  if ($(window).scrollTop()) {
    $(".navbar-sticky").addClass("navbar-sticky-active");
  } else {
    $(".navbar-sticky").removeClass("navbar-sticky-active");
  }
});

// Cấu hình tính năng dựng sẵn Slick Slider
$(document).ready(function () {
  $(".slider-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    speed: 300,
    adaptiveHeight: true,
    touchThreshold: 500,
    prevArrow: `<span class="slick-prev"><i class="fa-solid fa-chevron-left"></i></span>`,
    nextArrow: `<span class="slick-next"><i class="fa-solid fa-chevron-right"></i></span>`,
  });
});

// Back to top
btnBackTop = document.querySelector(".back-to-top") ;

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 800) {
    btnBackTop.style.display = "inline-block";
  } else {
    btnBackTop.style.display = "none";
  }
})

btnBackTop.addEventListener("click", function ScrollToTop() {
  window.scrollTo(0, 0);
})
