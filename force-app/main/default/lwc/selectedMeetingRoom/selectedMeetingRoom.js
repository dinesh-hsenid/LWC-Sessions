import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class SelectedMeetingRoom extends LightningElement {
    selectedMeetingRoom = {};

    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        registerListener('pubsubTileClicked', this.onMeetingRoomSelectHandler, this);
    }
 
    onMeetingRoomSelectHandler(payload) {
        this.selectedMeetingRoom = payload;
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }
}