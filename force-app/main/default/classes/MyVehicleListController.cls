public with sharing class MyVehicleListController {
   //Nested Soql query to get data from product2
   @AuraEnabled
   public static List<Product2> getMake(Id recordId){
       List<Product2> makelist = [SELECT Vehicle_Make__c, Vehicle_Model__c, Year__c, 
       (SELECT ID, Name FROM Customization_Catalogue_Entries__r), 
       (SELECT ID, Name FROM Paint_Color_Catalogue_Entries__r), 
       (SELECT ID, Name FROM Accessory_Catalogue_Entries__r) FROM Product2 WHERE Id = :recordId];
       return makelist;   
   }
   //child to parent query
   @AuraEnabled
   public static List<Product2> getData(){
   List<Product2> myList = [SELECT Name, Price__c, Make__c, Model__c, Year__c,
        (SELECT Name, Customization__r.Price__c, Customization__r.Name, Customization__r.Id FROM Customization_Catalogue_Entries__r),
        (SELECT Name, Color__r.Price__c, Color__r.Name, Color__r.Id FROM Color_Catalogue_Entries__r),
        (SELECT Name, Accessory__r.Price__c, Accessory__r.Name, Accessory__r.Id FROM Accessory_Catalogue_Entries__r)
        FROM Product2];
         return myList;
}

}
       