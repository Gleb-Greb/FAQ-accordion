document.querySelectorAll(".item").forEach(item => item.addEventListener("click", onClick))
//.addEventListener("click", onClick)



function onClick (event) {
   
    this.classList.toggle("open")
    // document.getElementById("it").classList.add("item--open");
    // document.getElementById("it").classList.remove("item--open");
}

