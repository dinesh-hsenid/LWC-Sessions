public with sharing class accountManager {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(Integer numberOfRecords){
        try {
            return [SELECT Id, Name FROM Account LIMIT :numberOfRecords];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
