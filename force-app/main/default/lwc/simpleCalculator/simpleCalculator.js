import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    firstNumber;
    secondNumber;
    previousResults = [];
    @track showPreviousResult = false;


    inputNumberHandler(event) {
        const inputName = event.target.name;

        if(inputName == 'firstNumber') {
            this.firstNumber = event.target.value;
        }
        else if(inputName == 'secondNumber') {
            this.secondNumber = event.target.value;
        }
    }

    addHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN} + ${secondN} is ${firstN + secondN}`;
        this.previousResults.push(this.currentResult);
    }

    subtractHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN} - ${secondN} is ${firstN - secondN}`;
        this.previousResults.push(this.currentResult);
    }

    multiplyHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN} x ${secondN} is ${firstN * secondN}`;
        this.previousResults.push(this.currentResult);
    }

    divideHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN} / ${secondN} is ${firstN / secondN}`;
        this.previousResults.push(this.currentResult);
    }

    showPreviousResultsHandler(event) {
        this.showPreviousResult = event.target.checked;
    }
}