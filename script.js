window.onload = function(){

    //theme selector
    const root = document.querySelector(':root');
    const themeSlider = document.getElementById('skin-selector');

    function themeSelect(value){
        document.querySelector('body').classList = []
        document.querySelector('body').classList.add('theme-' + themeSlider.value)
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

          keys.forEach(k =>{
              k.addEventListener('click', e =>{
                //variables
                const key = e.target;
                const keyValue = key.value;
                const displayValue = display.innerText; 
                const currentValue = displayValue;
                

                //numbers displayed
                if(e.target.classList.contains('digit')){
                  if(displayValue === '0'){
                      display.innerText = keyValue;
                  }else {
                      display.innerText = displayValue + keyValue;
                  }
                }
                //handle the operators  
                if(e.target.classList.contains('operator')){ 
                    mathArr.push(displayValue); 
                    mathArr.push(e.target.innerText);
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
                
                if(e.target.classList.contains('equals')){
                  mathArr.push(displayValue);
                  switch(mathArr[(mathArr.length -2)]){
                    case "+":
                      let addition = Number(mathArr[0]) + Number(mathArr[(mathArr.length - 1)]);
                      display.innerText = addition;
                      mathArr = [];
                      break;
                      case "-":
                      let subtraction = Number(mathArr[0]) - Number(mathArr[(mathArr.length - 1)]);
                      display.innerText = subtraction;
                      mathArr = [];
                      break;
                      case "x":
                      let multiplication = Number(mathArr[0]) * Number(mathArr[(mathArr.length - 1)]);
                      display.innerText = multiplication;
                      mathArr = [];
                      break;
                      case "/":
                      let division = Number(mathArr[0]) / Number(mathArr[(mathArr.length - 1)]);
                      display.innerText = division;
                      mathArr = [];
                      break;
                  }
                    
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
