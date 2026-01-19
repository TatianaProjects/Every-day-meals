const searchInput = document.querySelector("#search")

const divs=document.querySelectorAll (".meal")


searchInput.addEventListener("keyup",function (event){
    const word = event.target.value.toLowerCase();

    divs.forEach(item => {
            const title = item.querySelector("p").textContent.toLowerCase();
            const category = item.dataset.category.toLowerCase();

            if(title.includes(word) || category.includes(word)){
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });

})

const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

scrollBtn.addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});