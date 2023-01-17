({
    subscribeEvent : function(component, event, helper) {
        const pubsubModule = component.find("pubsubModule");

        const callbackFunction = $A.getCallback(function(payload) {
            component.set("v.selectedMeetingRoom", payload);
        });

        pubsubModule.registerListener('pubsubTileClicked', callbackFunction);

    }
})
