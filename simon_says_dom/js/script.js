const countdown = document.getElementById("countdown");
const instructions_before = document.getElementById("instructions-before");
const instructions_after = document.getElementById("instructions-after");


let timer = 5;

function timer_function(){
    if(timer > 0){
        console.log(timer)
        countdown.innerHTML = timer;
        timer--;
        setTimeout(timer_function, 1000)
    }
    else{
        //togliamo la visibilità a cooldown e instructions-before
        countdown.classList.add("d-none");
        instructions_before.classList.add("d-none");
        //aggiungiamo la visibilità a instructions-after
        instructions_after.classList.remove("d-none");

    }
}



timer_function();