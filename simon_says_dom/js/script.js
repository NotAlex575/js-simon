const countdown = document.getElementById("countdown");
const instructions_before = document.getElementById("instructions-before");
const instructions_after = document.getElementById("instructions-after");
const numbers_list = document.getElementById("numbers-list");


let timer = 5;
let random_number = [];

//iniziamo a creare 5 numeri randomici da indovinare
for(let i = 0; i < 5; i++){
    const li = document.createElement("li");
    random_number[i] = Math.floor(Math.random()*100)+1
    li.innerHTML = random_number[i];
    numbers_list.appendChild(li);
}

function timer_function(){
    if(timer > 0){
        console.log(timer)
        countdown.innerHTML = timer;
        timer--;
        setTimeout(timer_function, 1000)
    }
    else{
        //togliamo la visibilità a cooldown instructions-before e togliamo i valori dentro a numbers_list
        countdown.classList.add("d-none");
        instructions_before.classList.add("d-none");
        numbers_list.innerHTML= "";
        //aggiungiamo la visibilità a instructions-after
        instructions_after.classList.remove("d-none");

    }
}



timer_function();