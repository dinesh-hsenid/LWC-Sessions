import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle = 'BMI Calculator'; // Private Non-reactive
    weight; // Private Non-reactive
    height; // Private Non-reactive

    @track bmi; // Private Reactive

    // After Spring'20 release, @track decorator is no more required for Primitive properties. 
    // But @track is still required for Array properties and Object properties.
    // Therefore, we can remove / add @track in bmi, both works the same. (i.e., Reactive).

    onWeightChange(event) {
        this.weight = parseFloat(event.target.value);
    }

    onHeightChange(event) {
        this.height = parseFloat(event.target.value);
    }

    checkBMIHandler() {
        try {
            this.bmi = this.weight / (this.height * this.height);
        }
        catch(error) {
            this.bmi = undefined;
        }
    }

    get bmiResult() {
        if(this.bmi === undefined){
            return "";
        }
        return `Your BMI is ${this.bmi}`;
    }
}