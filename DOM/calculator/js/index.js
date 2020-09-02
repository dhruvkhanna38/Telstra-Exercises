let results = [];
let evalString = "";
let lastRecalledIndex = -1 ;

let numberButtons = document.querySelectorAll(".btn-number");
let operatorButtons = document.querySelectorAll(".btn-op");
let cancelButton = document.querySelector(".btn-cancel");
let calculateButton = document.querySelector(".btn-eval");
let recallButton = document.querySelector(".btn-recall");
let display = document.querySelector(".display");
console.dir(display);

onNumberpress = function(event){
    display.value = display.value + this.innerText;
}

onOperatorPress= function(event){
    let lastChar = display.value[display.value.length-1];
    console.log(lastChar);
    if(lastChar!=='+' && lastChar!=='-' && lastChar!=='*'){
        display.value = display.value + this.innerText;
    }
    console.log(display.value);
}

onCancelPress =  function(event){
    display.value = ""; 
    if(results.length === 0){
        lastRecalledIndex = -1;
    }
    else{
        lastRecalledIndex = results.length-1;
    }
}

onEvalPress = function(event){
    let ans = eval(display.value);
    display.value = ans;
    results.push(ans);
    lastRecalledIndex++;
}

onRecallPress = function(event){
    if(lastRecalledIndex === -1){
        display.value = "0";
        return;
    }
    let ans = results[results.length - 1];
    lastRecalledIndex--;
    results.pop();
    display.value = ans;
}


for(let i=0;i<numberButtons.length;i++){
    numberButtons[i].addEventListener("click" , onNumberpress);
}

for(let i=0;i<operatorButtons.length;i++){
    operatorButtons[i].addEventListener("click", onOperatorPress)
}

cancelButton.addEventListener("click" , onCancelPress);
calculateButton.addEventListener("click", onEvalPress);
recallButton.addEventListener("click" , onRecallPress);