public class DataProvider {
    @AuraEnabled public static Account[] getUserRoles() {
        //agf__ADM_Parent_Work__c
        return [SELECT agf__Subject__c, ParentId FROM agf__ADM_Work__c];
    }
}