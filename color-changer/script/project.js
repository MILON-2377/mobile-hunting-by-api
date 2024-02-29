
const buttons = document.querySelectorAll("button");
const body = document.querySelector("body")


for(const button of buttons){
    console.log(button)
    button.addEventListener("click", function (e) {
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
        }
    })
}


// buttons.forEach( (button) => {
//     button.addEventListener("click", function (e) {
//         if(e.target.id === "red"){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === "green"){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === "blue"){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === "yellow"){
//             body.style.backgroundColor = e.target.id;
//         }
//     })
// })