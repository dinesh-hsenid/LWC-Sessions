import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    @track displayDivTag = false;

    @track cityList = ['Chennai', 'Bangalore', 'Hyderabad', 'Trivandrum'];

    displayDivHandler(event) {
        this.displayDivTag = event.target.checked;
    }
}