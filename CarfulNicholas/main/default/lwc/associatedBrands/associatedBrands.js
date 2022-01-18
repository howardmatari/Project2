import { LightningElement } from 'lwc';

export default class AssociatedBrands extends LightningElement {
    /*
    dynamically get url for images for brands by querying for
    base static resource url and appending the brand name
    */

    

    passMap = {};

    myList = {
        Name: 'name',
        Price__c: '100',
        Make__c: 'make',
        Model__c: 'model',
        Year__c: 'year',
        Customization_Catalogue_Entries__r: [
            {
                Name: 'name',
                Customization__r
            }
        ]
    }
}