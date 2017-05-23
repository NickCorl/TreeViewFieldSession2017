({
	toggle : function(component, event, helper) {
       //get expansion and set to the opposite value
        component.set("v.expanded", !component.get("v.expanded"));
	}
})