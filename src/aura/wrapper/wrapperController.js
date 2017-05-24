({
    init: function(component, event, helper) {
        var action = component.get("c.getUserRoles");
        //we need this to enqueue the actions
        //usually only need one callback
        action.setCallback(this, function(response) {
            var roles = {}, results;
            
            //makes sure the data we have is valid
            if(component.isValid() && response.getState() === "SUCCESS") {
                results = response.getReturnValue();
                //do not know the size of the array, so we need undefined
                roles[undefined] = { Name: "Root", items: [] };
                results.forEach(function(v) {
                    roles[v.Id] = { Name: v.Name, items: [] };
                });
                results.forEach(function(v) {
                    roles[v.ParentId].items.push(roles[v.Id]);
                });
                component.set("v.nodes", roles[undefined].items);
            }//otherwise there is an error
            else {
                alert(response.getError());
            }
        });
        //calls back to surver when we get a response
        $A.enqueueAction(action);
    }
})