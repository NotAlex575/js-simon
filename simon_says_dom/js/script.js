const countdown = document.getElementById("countdown");
const instructions_before = document.getElementById("instructions-before");
const instructions_after = document.getElementById("instructions-after");
const numbers_list = document.getElementById("numbers-list");
const answers_form = document.getElementById("answers-form");

const form = document.getElementById("answers-form");
const inputs = form.querySelectorAll("input");
const message = document.getElementById("message")


let timer = 5;
let random_number = [];

//iniziamo a creare 5 numeri randomici da indovinare
for(let i = 0; i < 5; i++){
    const li = document.createElement("li");
    random_number[i] = Math.floor(Math.random()*50)+1
    li.innerHTML = random_number[i];
    numbers_list.appendChild(li);
}

//TIMER CHE MOSTRA I 5 NUMERI, E DOPO CHE IL TIMER E A 0; RIMUOVE I 5 NUMERI
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
        answers_form.classList.remove("d-none")
    }
}

form.addEventListener("submit", function (event_submit) {
    let numeri_corretti = 0;
    event_submit.preventDefault();
    users_numbers = [];
    for (let i = 0; i < inputs.length; i++) {
        users_numbers.push(parseInt(inputs[i].value));
    }
    for (let i = 0; i < inputs.length; i++){
        for(let j = 0; j < inputs.length; j++){
            if(random_number[i] == users_numbers[j]){
                numeri_corretti++;
            }   
        }
    }
    console.log(numeri_corretti)
    message.innerHTML = "Hai trovato "+numeri_corretti+" numeri!"
})



timer_function();