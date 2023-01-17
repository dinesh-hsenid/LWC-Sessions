import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {
    selectedMeetingRoom;

    meetingRoomsInfo =[ 
        {roomNumber: 'A-01', roomCapacity: '12'},
        {roomNumber: 'A-02', roomCapacity: '11'},
        {roomNumber: 'A-03', roomCapacity: '8'},
        {roomNumber: 'B-01', roomCapacity: '12'},
        {roomNumber: 'B-02', roomCapacity: '5'},
        {roomNumber: 'C-01', roomCapacity: '7'}
    ];

    onTileSelectHandler(event) {
        const meetingRoomInfo = event.detail;
        this.selectedMeetingRoom = meetingRoomInfo.roomNumber;
    }

    constructor() {
        super();
        this.template.addEventListener('tileclick', this.onTileSelectHandler.bind(this));
    }
}