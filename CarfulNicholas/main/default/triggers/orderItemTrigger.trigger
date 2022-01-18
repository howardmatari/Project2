trigger orderItemTrigger on Order_Item__c (before insert) {
    switch on trigger.operationType {
        when BEFORE_INSERT {
            orderItemTriggerHandler.handleBeforeInsert(trigger.new);
        }
    }
}