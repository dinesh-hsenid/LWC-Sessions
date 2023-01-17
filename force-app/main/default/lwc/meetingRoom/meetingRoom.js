import { api, LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {
    // @api is the public property, which can be accessed from other components (i.e., outside components).
    @api meetingRoomInfo = {}; // {roomNumber: 'A-01', roomCapacity: '12'}

    @api showMeetingRoom = false;

    @wire(CurrentPageReference) pageReference; 

    tileClickHandler() {
        const tileClicked = new CustomEvent('tileclick', { detail : this.meetingRoomInfo, bubbles:true });

        this.dispatchEvent(tileClicked);

        fireEvent(this.pageReference, 'pubsubTileClicked', this.meetingRoomInfo);
    }
}
