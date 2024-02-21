const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const ans = document.querySelector(".answer");

yes.addEventListener('click',()=>{
    ans.style.visibility = "visible";
})

no.addEventListener('click',()=>{
    alert("error404 - that option isn't available bacheee!")
})