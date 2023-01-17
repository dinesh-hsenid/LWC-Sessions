import { LightningElement } from 'lwc';

import getAllAccounts from '@salesforce/apex/accountManager.getAccounts';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountManagerApex extends LightningElement {
    // @wire(getAllAccounts) 
    // accounts;

    numberOfRecords;
    accounts;

    get responseReceived() {
        if(this.accounts) {
            return true;
        }
        return false;
    }

    numberOfRecordsChangeHandler(event) {
        this.numberOfRecords = event.target.value;
    }

    getAccounts() {
        getAllAccounts({numberOfRecords : this.numberOfRecords}).then(response =>{
            this.accounts = response;
            const toastEvent = new ShowToastEvent({
                title : 'Accounts Loaded',
                message : this.numberOfRecords + ' Accounts Fetched From Server',
                variant : 'success',
            });
            this.dispatchEvent(toastEvent);
        }).catch(error => {
            console.log('Error found while fetching Accounts: ', error.body.message);
            const toastEvent = new ShowToastEvent({
                title : 'ERROR',
                message : error.body.message,
                variant : 'error',
            });
            this.dispatchEvent(toastEvent);
        });
    } 
}