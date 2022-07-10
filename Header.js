// ---------- NAVBAR LIST RESPONSIVE CONFIGURATION ---------- //
const dropDownIcon = document.querySelector(".header .container .icon");
const dropDownList = document.querySelector(".header .container .sidebar");
const darkWindow = document.querySelector(".darken");

// console.log(document.querySelector(".header .logo"));
document.querySelector(".header .logo").addEventListener("click", () => {
  location.href = location.origin + "/index.html";
});

dropDownIcon.addEventListener("click", () => {
  dropDownList.style = "transform: translateX(0) ; opacity: 1";

  darkWindow.style = "z-index: 3; opacity: 1; ";
  // console.log(dropDownList);
});

document.body.addEventListener("click", (e) => {
  if (parseInt(e.clientX) <= dropDownList.clientWidth) return;
  dropDownList.style = "transform: translateX(-100%) ; opacity: 0";
  darkWindow.style = "z-index: -100; opacity: 0 ; ";
});

const searchbar = document.querySelector(".search input");
//----------------------------------------------------------//
