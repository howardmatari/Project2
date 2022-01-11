import { api, LightningElement, track } from 'lwc';

export default class VehicleCustomizer extends LightningElement {
    //TODO implement sliding up footer when customizations/accessories buttons are clicked to display possible options
    vehicleImgUrl = '';
    makeSelected = false;
    
    @api
    makeMap = {
        Hyundai: ['Elantra', 'Sonata'],
        Honda: ['honda1', 'honda2'],
        Ford: ['ford1'],
        Mazda: ['mazda1', 'mazda2'],
        BMW: ['bmw1', 'bmw2', 'bmw3']
    }

    @track
    currentModelList = [];
    
    get makeList() {
        return Object.getOwnPropertyNames(this.makeMap);
    }

    updateModels() {
        if (this.template.querySelector('.makeSelect').value != '') {
            this.makeSelected = true;
            this.template.querySelector('.modelSelect').removeAttribute('disabled');
            this.currentModelList = this.makeMap[this.template.querySelector('.makeSelect').value];
        } else {
            this.makeSelected = false;
        }
    }
    
}