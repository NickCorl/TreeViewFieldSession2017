public class Campaigns {
    @AuraEnabled public static Campaign[] getUserRoles() {
        
        return [SELECT Name, ParentId FROM Campaign];
    }
}