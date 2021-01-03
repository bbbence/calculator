const calculations = {
    '+': function (a, b) { return a+b },
    '-': function (a, b) { return a-b },
    '/': function (a, b) { return a/b },
    '*': function (a, b) { return a*b },
}
const output = document.querySelector('.output');
let result = 0;
let operation = '+';

const addCharacter = (character) => {
    output.value = output.value + String(character);
}

const clear = () => {
    output.value= '';
    result = 0;
}

const calculate = () => {
}

document.querySelectorAll('.number, .decimal').forEach(item => {
    item.addEventListener('click', function(e){
        const character = e.toElement.innerHTML;
        addCharacter(character);
    })
})

document.querySelectorAll('.operation').forEach(item => {
    item.addEventListener('click', function(e){
        const character = e.toElement.innerHTML;
        addCharacter(character);
    })
})

document.querySelector('.clear').addEventListener('click', clear);
