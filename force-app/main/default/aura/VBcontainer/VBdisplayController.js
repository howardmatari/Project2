public class VBdisplayController {
    //Below method will return list of makes
     @AuraEnabled
     public static List<Make__c> getMake(){
         List<Make__c> makelist = [SELECT Vehicle_Make__c, Vehicle_Model__c, Year__c, (SELECT ID, Name FROM Customization_Catalogue_Entries__r), (SELECT ID, Name FROM Paint_Color_Catalogue_Entries__r), (SELECT ID, Name FROM Accessory_Catalogue_Entries__r) FROM Product2];
         return makelist;   
     }
    