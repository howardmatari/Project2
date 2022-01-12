public class UpdateAccessory {
    //Apex class checks status of lesson and if lesson is incomplete creates a task to owner
    //Owner assigns task to the tutor
public static void addAccessory(List <Accessory__c> newAccessory){
    // Assign trigger  id for lesson object.
    Set<ID> accessoryID = new Set<ID>();
    // Assign task created to a list to be updated outside of for loop. 
     List<Task> ta =new List<Task>();
     List<Accessory__c> access = new List<Accessory__c>();
    //iterate through trigger and check status field.
    for (Accessory__c acc : newAccessory) {
        if(acc.Price__c =='null'){
        accessoryID.add(acc.id);   
        acc.Price__c == '100';
        access.add(acc.Price__c);
        //Create a new task and assign it the variable t
    Task t = new Task();
    // Assign Values to the task t
    t.WhatID          = acc.Id;
    t.Ownerid         = acc.Ownerid;
    t.subject 	  = 'Task Created by Trigger';
    t.Status	  = 'In Progress';
    t.Description     = 'New Description Task created by Trigger';
    t.ActivityDate = date.today() + 3;
    ta.add(t) ;
        }
         insert ta;
    }
      
}
    
}