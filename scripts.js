const input = document.getElementById("input");
const button = document.getElementById("button");
const DivImg = document.getElementById("div1");


button.addEventListener("click", (e) => {
    e.preventDefault();
    
    image(input.value);
})



async function image(id) {
    try {
  
        DivImg.innerHTML = `<img class="img1" src="https://http.dog/${id}.jpg">`;
    
}
    catch (error) {
        DivImg.innerHTML = "<p>error in loading data</p>"
    }
}
