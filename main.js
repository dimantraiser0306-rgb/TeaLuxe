const close = document.querySelector(".close_btn");
const menu_list = document.querySelector(".menu_list");
const menu_btn = document.querySelector(".menu_btn");

menu_btn.addEventListener("click", function () {
  console.log("clicked");
  menu_list.classList.toggle("active");
});

close.addEventListener("click", function () {
  menu_list.classList.remove("active");
});
