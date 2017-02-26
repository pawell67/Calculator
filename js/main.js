var result = document.getElementById('result');
var numbers = document.querySelectorAll('button.number');
var numbersLength = numbers.length;

var number, limit = 15, action, score;
var actions = document.querySelectorAll('button.action');
var actionsLength = actions.length;
var output = result.innerHTML;
for (var i = 0; i < numbersLength; i++) {

    numbers[i].addEventListener('click', function () {
        number = this.value;
        console.log(number);

        output = result.innerHTML += number;
        if (output.length > limit) {
            alert("This nubmer is too long!")
        }
    }, false);
}

for (i = 0; i < actionsLength; i++) {
    actions[i].addEventListener('click', function () {
        action = this.value;
        output = result.innerHTML += action;

        if (action === "=") {
            output = result.innerHTML;
            score = eval(output.slice(0,-1));
            result.innerHTML = score;

        } else {
        }
    }, false);
}

var del =document.querySelector('.delete');
del.addEventListener('click',function(){
    result.innerHTML='';
},false);

var coma = document.querySelector('.coma');
coma.addEventListener('click',function(){

    if(result.innerHTML === "."){
        result.innerHTML= "0.";

    }
},false);