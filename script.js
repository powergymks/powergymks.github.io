


document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("ra-menu-btn"); 
  const navLinks = document.getElementById("ra-nav-links"); 
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  document.getElementById("ra-joinNowButton").addEventListener("click", function() {
    document.getElementById("applicationForm").style.display = "block";
  });
  
  document.getElementById("gymForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Faleminderit per aplikimin tuaj!");
    document.getElementById("applicationForm").style.display = "none"; 
  });
    

});
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
});
