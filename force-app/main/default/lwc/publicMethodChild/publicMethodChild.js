import { api, LightningElement } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    value = ['red'];

    options = [
        { label: 'Red Ranger', value: 'red' },
        { label: 'Blue Ranger', value: 'blue' },
        { label: 'Green Ranger', value: 'green' },
        { label: 'Yellow Ranger', value: 'yellow' },
    ]

    @api
    selectCheckbox(checkboxValue) {
        const selectedCheckbox = this.options.find( checkbox => {
            return checkboxValue === checkbox.value; 
        })

        if(selectedCheckbox) {
            this.value = selectedCheckbox.value;
            return 'Checkbox selected successfully';
        }
        return 'Error in selecting checkbox';
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // value = ['red'];

    // options = [
    //     { label: 'Red Marker', value: 'red' },
    //     { label: 'Blue Marker', value: 'blue' },
    //     { label: 'Green Marker', value: 'green' },
    //     { label: 'Yellow Marker', value: 'yellow' }
    // ];

    // // Public method calling from Parent to child 
    // @api
    // selectCheckBox(checkboxValue) {
    //     const selectedCheckBox = this.options.find( checkbox => {
    //         return checkboxValue === checkbox.value;
    //     })

    //     if(selectedCheckBox) {
    //         this.value = selectedCheckBox.value;
    //         return "Successfully checked";
    //     }
    //     return "No checkbox found";
    // }
}