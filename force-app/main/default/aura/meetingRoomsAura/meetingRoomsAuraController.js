({
    doInit : function(component, event, helper) {
        component.set("v.meetingRoomInfo", [
            {roomNumber: 'A-01', roomCapacity: '12'},
            {roomNumber: 'A-02', roomCapacity: '11'},
            {roomNumber: 'A-03', roomCapacity: '8'},
            {roomNumber: 'B-01', roomCapacity: '12'},
            {roomNumber: 'B-02', roomCapacity: '5'},
            {roomNumber: 'C-01', roomCapacity: '7'}
        ]);


    },

    tileClickHandler : function(component, event, helper) {
        component.set("v.selectedMeetingRoom", event.getParam('roomNumber'));
    }
})
