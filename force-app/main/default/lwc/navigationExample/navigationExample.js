import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationExample extends NavigationMixin(LightningElement) {

    openGithub() {
        this[NavigationMixin.Navigate] ({
            type : 'standard__webPage',
            attributes : {
                url : 'https://github.com/dinesh-hsenid/ContactTracing'
            }
        });
    }

    openAccountHome() {
        this[NavigationMixin.Navigate] ({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Account',
                actionName : 'Home'
            }
        });
    }

    createNewContact() {
        this[NavigationMixin.Navigate] ({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'new'
            }
        });
    }

    openOppListView() {
        this[NavigationMixin.Navigate] ({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Opportunity',
                actionName : 'list'
            }
        });
    }

    openCaseRecord() {
        this[NavigationMixin.Navigate] ({
            type : 'standard__recordPage',
            attributes : {
                recordId : '5002w00000ckZQWAA2',
                objectApiName : 'Case',
                actionName : 'view'
            }
        });
    }

    openMeetingRoom() {
        this[NavigationMixin.Navigate] ({
            type : 'standard__navItemPage',
            attributes : {
                apiName : 'Meeting_Rooms'
            }
        });
    }
}