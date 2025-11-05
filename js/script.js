// YOUR CODE HERE
document.querySelector("#btn1").addEventListener("click", () => {
    const output1 = document.querySelector("#output1");
    output1.style.color = "red"
})

document.querySelector("#btn2").addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent = "Hello, World";
    const parag = document.querySelector("#output2");
    parag.append(span);
})

document.querySelector("#btn3").addEventListener("click", () => {
    const smallP = document.querySelector("#output3 p")
    smallP.classList.remove("small-text");
})

document.querySelector("#btn4").addEventListener("click", () => {
    const output4 = document.querySelectorAll("#output4 p");
    output4.forEach((item) => {
        item.style.color = "red";
    })

})

document.querySelector("#btn5").addEventListener("click", () => {
    const input = document.querySelector("#output5 input");
    console.log(input.value);
})