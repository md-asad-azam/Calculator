const disp1 = document.getElementById("disp1")
const disp2 = document.getElementById("disp2")
const number = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const ac = document.getElementById("ac")
const del= document.getElementById("del")
const equals = document.getElementById("equals")

class Calculator{
    constructor(disp1, disp2){
        this.disp1 = disp1
        this.disp2 = disp2
        this.val1 = ""
        this.val2 = ""
        this.clear()
    }
    // to clear all
    clear(){
        this.disp1.innerText = this.disp2.innerText = ""
        this.num = ""
        this.operator = ""
    }

    // for del button #to delete 1 char from the disp2
    delete(){
        this.disp2.innerText = this.disp2.innerText.slice(0, -1)
    }

    //to append the input data 1 by 1
    append(text){
        if(text == "." && this.num.includes("."))
            return
        else if(text == "+" || text == "-" || text == "*" || text == "/")
            this.updateDisplay1(text) //as soon as we get an operator we update the disp1
        else
            this.updateDisplay2(text)// we update disp2 when we get a number
    }
    updateDisplay1(text){
        this.chooseOperator(text)
        this.val1 = disp2.innerText //updating val1 this will help in computation
        this.disp1.innerText = this.disp2.innerText + text
        this.disp2.innerText = this.num = ""
    }
    updateDisplay2(text){
        this.disp2.innerText += text
        this.val2 = text //updating val2 this will help in computation
    }

    chooseOperator(operator){
        this.operator = operator
    }

    compute(){
        // we use val1 val2 and operator to implement the functions
        let prev = parseFloat(this.val1) 
        let current = parseFloat(this.val2)
        switch(this.operator){
            case "+": 
            return prev + current
            break
            case "-": 
            return prev - current
            break
            case "*": 
            return prev * current
            break
            case "/": 
            return prev / current
            break
            default:
                alert("chai pi lo")
            
        }    
    }
}

const calc = new Calculator(disp1, disp2);

//when integer butons are clicked
number.forEach(number => {
    number.addEventListener("click", () => {
        calc.append(number.innerText)
    })
});

//when operators are clicked
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        calc.append(operator.innerText) 
    })
})

//when equalto button is clicked
equals.addEventListener("click", () => {
    disp1.innerText += disp2.innerText
    disp2.innerText = calc.compute()
})

//all clear
ac.addEventListener("click", () => {
    calc.clear()
})


//delete
del.addEventListener("click", () => {
    calc.delete()
})