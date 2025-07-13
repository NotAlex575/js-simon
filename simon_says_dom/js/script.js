const countdown = document.getElementById("countdown");
const instructions_before = document.getElementById("instructions-before");
const instructions_after = document.getElementById("instructions-after");
const numbers_list = document.getElementById("numbers-list");
const answers_form = document.getElementById("answers-form");

const form = document.getElementById("answers-form");
const inputs = form.querySelectorAll("input");
const message = document.getElementById("message")

const rigioca = document.getElementById("ricomincia")
const invio_button = document.getElementById("invio")

let timer = 5;
let random_number = [];
let numeri_esistenti_check = [];
let numeri_corretti = 0;

function start_game(){

    //iniziamo a creare 5 numeri randomici da indovinare
    for(let i = 0; i < 5; i++){
        const li = document.createElement("li");
        let numero =  Math.floor(Math.random()*50)+1;
        //qui creiamo numeri randomici finchè non generiamo un numero che non è stato già generato prima
        for (let j = 0; numeri_esistenti_check.includes(numero); j++) {
            numero =  Math.floor(Math.random()*50)+1;
        }
        random_number[i] = numero;
        li.innerHTML = random_number[i];
        numbers_list.appendChild(li);
    }
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
        //questo serve se abbiamo resettato e vogliamo rimettere la visibilità al form
        if(form.classList.contains("d-none")){
            form.classList.remove("d-none");
        }
        if(invio_button.classList.contains("d-none")){
            invio_button.classList.remove("d-none");
        }
    }
}

form.addEventListener("submit", function (event_submit) {
    if(message.classList.contains("d-none")){
        message.classList.remove("d-none")
    }
    numeri_corretti = 0;
    event_submit.preventDefault();
    let users_numbers = [];
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
    if(numeri_corretti == 5){
        instructions_after.innerHTML = "Hai trovato tutti e 5 i numeri! vuoi rigiocare?"
        form.classList.add("d-none");
        invio_button.classList.add("d-none");
    }
    else{
        message.innerHTML = "Hai trovato "+numeri_corretti+" numeri! vuoi continuare o resettare?"
    }
    if (rigioca.classList.contains("d-none")) {
        rigioca.classList.remove("d-none")
    }
})

//EXTRA MIO: RESET DEL GIOCO
rigioca.addEventListener("click", function(){
    if(!(form.classList.contains("d-none"))){
        form.classList.add("d-none");
    }
    message.classList.add("d-none")
    instructions_after.innerHTML= "Indovina i 5 numeri!";
    instructions_after.classList.add("d-none");
    instructions_before.classList.remove("d-none");
    timer = 5;
    random_number = [];
    console.log(random_number)
    rigioca.classList.add("d-none")
    countdown.classList.remove("d-none");
    start_game();
    timer_function();
})


start_game();
timer_function();