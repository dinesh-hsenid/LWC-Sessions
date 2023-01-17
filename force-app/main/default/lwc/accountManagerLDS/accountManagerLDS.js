import { LightningElement, wire } from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';

const fieldsArray = ['Account.Name', 'Account.Phone', 'Account.Website'];

export default class AccountManagerLDS extends LightningElement {
    
    accountName;
    accountPhone;
    accountWebsite;

    recordId;

    @wire(getRecord, {recordId : '$recordId', fields : fieldsArray})
    accountRecord;

    accountNameChange(event) {
        this.accountName = event.target.value;
    }

    accountPhoneChange(event) {
        this.accountPhone = event.target.value;
    }

    accountWebsiteChange(event) {
        this.accountWebsite = event.target.value;
    }

    createAccount() {
        const fields = {'Name': this.accountName, 'Phone': this.accountPhone, 'Website': this.accountWebsite };
        const recordInput = {apiName: 'Account', fields};

        createRecord(recordInput).then(response => {
            console.log('Account created Successfully with Record Id: ', response.id);
            this.recordId = response.id;
        }).catch(error => {
            console.error('Error in creating an Account', error.body.message);
        });
    }

    get retrievedAccName() {
        if(this.accountRecord.data) {
            return this.accountRecord.data.fields.Name.value;
        }
        return undefined;
    }

    get retrievedAccPhone() {
        if(this.accountRecord.data) {
            return this.accountRecord.data.fields.Phone.value;
        }
        return undefined;
    }

    get retrievedAccWebsite() {
        if(this.accountRecord.data) {
            return this.accountRecord.data.fields.Website.value;
        }
        return undefined;
    }
    
}