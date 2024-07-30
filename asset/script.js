const formOpenBtn = document.querySelector("#form_open"),
 home = document.querySelector(".home"),
 formContainer = document.querySelector(".form_contianer"),
 formCloseBtn = document.querySelector(".form_close"),
 signupBtn = document.querySelector("#signup"),
 loginBtn = document.querySelector("#login"),
 pwShowhide = document.querySelectorAll(".pw-hide");


formOpenBtn.addEventListener("click",() => home.classList.add("show"));
formCloseBtn.addEventListener("click",() => home.classList.remove("show"));

pwShowhide.forEach((icon) => {
    icon.addEventListener("click",() =>{
let getPwinput = icon.parentElement.querySelector("input");
if (getPwinput.type === "password") {
    getPwinput.type = "text";
    icon.classList.replace("fa-eye-slash","fa-eye");
}else{
    getPwinput.type = "password";
    icon.classList.replace("fa-eye","fa-eye-slash")
}
    });
})

 signupBtn.addEventListener("click",(e)=>{
     e.preventDefault();
     formContainer.classList.add("active")
 });

 loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.remove("active")
});
