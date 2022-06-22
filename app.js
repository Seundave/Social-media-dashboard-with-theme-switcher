const toggle = document.querySelector(".toggle");
const toggleBtn = document.querySelector(".toggle_btn");
const Body = document.querySelector("body");
const Header = document.querySelector("header")

toggle.addEventListener("click", (e) => {
    toggleBtn.classList.toggle("night-mode")
    if (toggleBtn.classList.contains("night-mode")){
        Body.classList.add("night");
        Header.classList.add("Header-light");
    }else{
        Body.classList.remove("night"); 
    }
});










