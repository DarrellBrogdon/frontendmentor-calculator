window.onload = function(){

    //theme selector
    const root = document.querySelector(':root');
    const themeSlider = document.getElementById('skin-selector');

    function themeSelect(value){
        if(themeSlider.value == 1){
            root.style.setProperty('--font-color', '#35352c');
            root.style.setProperty('--display-background-color', '#ededed');
            root.style.setProperty('--keypad-background-color', '#d1cccc');
            root.style.setProperty('--special-operations-background-color', '#377f86');
            root.style.setProperty('--special-operations-border-color', '#1b5f65');
            root.style.setProperty('--special-operations-font-color', 'white');
            root.style.setProperty('--equal-sign-background-color', '#ca5502');
            root.style.setProperty('--equal-sign-border-color',  '#893901');
            root.style.setProperty('--equal-sign-font-color', 'white');
            root.style.setProperty('--background-color', '#e6e6e6');
            root.style.setProperty('--button-bottom-color', '#a69d91');
            root.style.setProperty('--button-color', '#e5e4e1');
            root.style.setProperty('--button-font-color', '#444b5a');
        }else if(themeSlider.value == 2){
            root.style.setProperty('--font-color', '#ffe53d');
            root.style.setProperty('--display-background-color', '#1d0934');
            root.style.setProperty('--keypad-background-color', '#1d0934');
            root.style.setProperty('--special-operations-background-color', ' #58077d');
            root.style.setProperty('--special-operations-border-color', '#bc15f4');
            root.style.setProperty('--special-operations-font-color', 'white');
            root.style.setProperty('--equal-sign-background-color', '#00e0d1');
            root.style.setProperty('--equal-sign-border-color',  '#6cf9f2');
            root.style.setProperty('--equal-sign-font-color', '#1b2428');
            root.style.setProperty('--background-color', '#160628');
            root.style.setProperty('--button-bottom-color', '#871c9c');
            root.style.setProperty('--button-color',  '#341c4f');
            root.style.setProperty('--button-font-color', '#ffe53d');
        }else{
            root.style.setProperty('--font-color', 'white');
            root.style.setProperty('--display-background-color', '#182034');
            root.style.setProperty('--keypad-background-color', '#232c43');
            root.style.setProperty('--special-operations-background-color', '#637097');
            root.style.setProperty('--special-operations-border-color', '#404e72');
            root.style.setProperty('--special-operations-font-color', 'white');
            root.style.setProperty('--equal-sign-background-color', '#d03f2f');
            root.style.setProperty('--equal-sign-border-color',  '#93261a');
            root.style.setProperty('--equal-sign-font-color', 'white');
            root.style.setProperty('--background-color', '#3a4764');
            root.style.setProperty('--button-bottom-color', '#b4a597');
            root.style.setProperty('--button-color', '#eae3dc');
            root.style.setProperty('--button-font-color', '#444b5a');
        }
    };
    //event listeners for theme change
        themeSlider.addEventListener('mousemove', themeSelect);
        themeSlider.addEventListener('change', themeSelect);


//calculator functionality  
const calculator = document.querySelector('.calculator-body');
          const keys = document.querySelectorAll('.key');
          const operations = document.querySelectorAll('.operation');
          const display = document.querySelector('.number-output');
          let mathArr = [];
          let currentOp = null;

          keys.forEach(k =>{
              k.addEventListener('click', e =>{
                //variables
                const key = e.target;
                const keyValue = key.value;
                const displayValue = display.innerText; 
                const currentValue = displayValue;

                //numbers displayed
                if(e.target.classList.contains('digit')){
                    display.innerText = keyValue;
                }

                //handle the operators  
                if(e.target.classList.contains('operator')){ 
                    mathArr.push(displayValue); 
                    currentOp = e.target.innerText
                    console.log(mathArr);
                    display.innerText = keyValue;
                }
               
                if(e.target.classList.contains('delete')){
                  display.innerText = displayValue.substring(0, [displayValue.length -1]);
                }

                if(e.target.classList.contains('reset')){
                  display.innerText = '0';
                  mathArr = [];
                  console.log(mathArr);
                }
                
                if(currentOp !== null && (e.target.classList.contains('equals') || mathArr.length == 2)){
                  mathArr.push(displayValue);
                  display.innerText = calculate(mathArr, currentOp);
                  mathArr = [display.innerText];
                }
                
                })
                

            })

          

        /* 
        1. only one decimal point per number
        2. only one operator per operation
        3. comma at char 4 when value.length >=4, comma at char 8 while value.length >=7 etc. --> but what about decimal places?
        5. = calculates total, but any operator acts as = once an operator has been selected.


*/



};

function calculate(mathArr, currentOp) {
    switch (currentOp) {
        case "+":
            return Number(mathArr[0]) + Number(mathArr[1])
            break;
        case "-":
            return Number(mathArr[0]) - Number(mathArr[1])
            break;
        case "x":
            return Number(mathArr[0]) * Number(mathArr[1])
            break;
        case "/":
            return Number(mathArr[0]) / Number(mathArr[1])
            break;
    }
}
