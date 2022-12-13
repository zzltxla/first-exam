let buttons = document.querySelectorAll("button");
let espresso = document.querySelector("#btn1");
let latte = document.querySelector("#btn2");
let tea = document.querySelector("#btn3");
let longBlack = document.querySelector("#btn4");
let machiatto = document.querySelector("#btn5");
let chocolate = document.querySelector("#btn6");
let screen = document.querySelector("#selection-screen");
let screentxt = document.querySelector("#select");
//VAR REGION ENDS HERE 

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        buttons[i].classList.toggle("buttonAnimation");
    });
    //ALL BUTTONS ONCLICK FUNCTION

    espresso.addEventListener('click', function() {
        screentxt.innerHTML = "Espresso selected.";
        let descTxt = screentxt.innerHTML += " <p>Your drink is being prepapred !</p>";
        let p = document.querySelector("p");
        p.style.fontSize = "15px";
        } );
    //ESPRESSO FUNCTION
    
    latte.addEventListener('click', function() {
        screentxt.innerHTML = "Latte selected. ";
        let descTxt = screentxt.innerHTML += "<p>Your drink is being prepapred !</p>";
        let p = document.querySelector("p");
        p.style.fontSize = "15px";
    } );
    //LATTE FUNCTION

    tea.addEventListener('click', function() {
        screentxt.innerHTML = "Tea selected. ";
        let descTxt = screentxt.innerHTML += "<p>Your drink is being prepapred !</p>";
        let p = document.querySelector("p");
        p.style.fontSize = "15px";
    } );
    //TEA FUNCTION

    longBlack.addEventListener('click', function() {
        screentxt.innerHTML = "Long Black selected. ";
        let descTxt = screentxt.innerHTML += "<p>Your drink is being prepapred !</p>";
        let p = document.querySelector("p");
        p.style.fontSize = "15px";
    } );
    //LONGBLACK FUNCTION

    machiatto.addEventListener('click', function() {
        screentxt.innerHTML = "Machiatto selected. ";
        let descTxt = screentxt.innerHTML += "<p>Your drink is being prepapred !</p>";
        let p = document.querySelector("p");
        p.style.fontSize = "15px";
    } );
    //MACHIATTO FUNCTION

    chocolate.addEventListener('click', function() {
        screentxt.innerHTML = "Chocolate selected. ";
        let descTxt = screentxt.innerHTML += "<p>Your drink is being prepapred !</p>";
        let p = document.querySelector("p");
        p.style.fontSize = "15px";
    } );
    //CHOCOLATE FUNCTION 

        setTimeout (() => {         //RELOAD FUNCTION
            window.location.reload();
        }, 10000);
}


