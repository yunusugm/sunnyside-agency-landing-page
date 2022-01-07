const iconArrow = document.getElementById("arrowDown");
const hamburger = document.querySelector(".menu__checkbox");
const navbar = document.querySelector(".navbar__item");

iconArrow.addEventListener("click", function () {
  const element = document.getElementById("targetArrow");
  let elementPosition = element.getBoundingClientRect().top;

  const headerScroll = () => {
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
    console.log("Pass");
  };

  setTimeout(headerScroll, 1200);

  iconArrow.classList.add("meluncur");

  setTimeout(() => {
    iconArrow.classList.remove("meluncur");
  }, 2000);
});

hamburger.addEventListener("click", function () {
  navbar.classList.toggle("show");
});
