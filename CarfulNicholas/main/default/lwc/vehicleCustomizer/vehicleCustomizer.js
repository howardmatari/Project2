import { api, LightningElement, track } from 'lwc';
import HYUNDAIELANTRA from '@salesforce/resourceUrl/hyundaiElantra';

export default class VehicleCustomizer extends LightningElement {
    //TODO implement sliding up footer when customizations/accessories buttons are clicked to display possible options
    vehicleImgUrl = HYUNDAIELANTRA;
    makeSelected = false;
    
    @api
    makeMap = {
        Hyundai: ['Elantra', 'Sonata'],
        Honda: ['honda1', 'honda2'],
        Ford: ['ford1'],
        Mazda: ['mazda1', 'mazda2'],
        BMW: ['bmw1', 'bmw2', 'bmw3']
    }

    @api
    makeMap2 = {
        Hyundai: {
            Elantra: {
                2020: {
                    Accessories: {
                        Acc1: {
                            Name: 'acc1',
                            ImgUrl: '',
                            Price: '+ $200'
                        },
                        Acc2: {
                            Name: 'acc2',
                            ImgUrl: '',
                            Price: '+ $200'
                        },
                        Acc3: {
                            Name: 'acc3',
                            ImgUrl: '',
                            Price: '+ $200'
                        }
                    },
                    Customizations: {
                        Cust1: {
                            Name: 'acc1',
                            ImgUrl: '',
                            Price: '+ $200'
                        }
                    }
                },
                2021: {
                    Accessories: {
                        Acc1: {
                            Name: 'acc1',
                            ImgUrl: '',
                            Price: '+ $200'
                        }
                    },
                    Customizations: {
                        Cust1: {
                            Name: 'acc1',
                            ImgUrl: '',
                            Price: '+ $200'
                        }
                    }
                }
            }
        }
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