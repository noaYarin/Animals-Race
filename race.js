let runners = {
    dog: {
        "name": "dog",
        "id": "dog",
        "voice": "woof",
        "img": "images/dog.jpg",
        "step": 50
    },
    horse: {
        "name": "horse",
        "id": "horse",
        "voice": "neigh",
        "img": "images/hourse.gif",
        "step": 70
    },
    duck: {
        "name": "duck",
        "id": "duck",
        "voice": "quack",
        "img": "images/duck.gif",
        "step": 40
    },
    chick: {
        "name": "chick",
        "id": "chick",
        "voice": "cheap",
        "img": "images/chick.gif",
        "step": 30
    }
};
let inner = document.querySelector('.root');
let start = document.querySelector("button");
let choose = document.querySelector('#btn');
let animals = document.getElementsByClassName('animal');
let row = document.createElement('td');
let column = document.querySelectorAll('tr');
let flagPic = document.querySelector('.flag')

for(let i=0;i<animals.length;i++){
animals[i].classList.add('gone');
choose.classList.add('gone');
}
start.addEventListener('click',()=>{
for(let i=0;i<animals.length;i++){
animals[i].classList.add('come');
choose.classList.add('come');
start.classList.add('gone');
flagPic.classList.add('gone')
}
});
let flag = 0;
choose.addEventListener('click',()=>{
    for(let j=0;j<animals.length;j++){
    let animal = animals[Math.floor(Math.random()*(animals.length))];
     animal.style.border= "2px solid red";
    switch(animal){
        case animals[0]:
           row.innerText=runners.chick["voice"];
           column[0].appendChild(row)
           break;
        case animals[1]:
           row.innerHTML=runners.dog["voice"];
           column[1].appendChild(row)
           break;
        case animals[2]:
           row.innerHTML=runners.duck["voice"];
           column[2].appendChild(row)
           break;
        case animals[3]:
           row.innerHTML=runners.horse["voice"];
           column[3].appendChild(row)
           break;
    }
       animal.classList.add('effect');
       flag++
       if(flag==1){
       animal.style.border= "2px solid yellow";
       }
    break; 
    }
});

let cashBox =document.querySelector('.cash');
let name = document.querySelector('#name');
let cash= document.querySelector('#num');
let add = document.querySelector('#add');

let details = function(_name,_cash){
    let obj = {};
    obj.name = _name;
    obj.cash = _cash;
    obj.getDetails = function(){
     cashBox.innerHTML += 
    `player-name : ${obj.name} <br>
    cash : ${obj.cash}$<br>` 
    }
    return obj;
};
add.addEventListener('click',()=>{
let players = new details(name.value,cash.value);
players.getDetails();
resetFileds()
});

function resetFileds(){
    name.value = "";
    cash.value= "";
}

    
