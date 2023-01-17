import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    
    
    value;

    checkboxChangeHandler(event) {
        this.value = event.target.value;
    }
    
    searchCheckboxHandler() {
        const childComp = this.template.querySelector('c-public-method-child');
        childComp.selectCheckbox(this.value);
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // value;

    // onInputChangeHandler(event) {
    //     this.value = event.target.value;
    // }

    // checkboxSelectHandler() {
    //     // Public method calling from Parent to child
    //     const childComponent = this.template.querySelector('c-public-method-child');
    //     const returnedMessage = childComponent.selectCheckBox(this.value);
    //     console.log('Returned message: ' +returnedMessage);
    // }  
}