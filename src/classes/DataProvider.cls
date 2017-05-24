public class DataProvider {
    @AuraEnabled public static Account[] getUserRoles() {
        
        return [SELECT Name, ParentId FROM Account];
    }
}