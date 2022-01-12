import { api, LightningElement, track } from 'lwc';
import HYUNDAIELANTRA from '@salesforce/resourceUrl/hyundaiElantra';

export default class VehicleCustomizer extends LightningElement {
    //TODO implement sliding up footer when customizations/accessories buttons are clicked to display possible options
    vehicleImgUrl = HYUNDAIELANTRA;
    makeSelected = false;
    modelSelected = false;

    @api
    makeMap = {
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
            },
            Sonata: {
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
                }
            }
        }
    }

    @track
    currentModelList;
    
    get makeList() {
        return Object.getOwnPropertyNames(this.makeMap);
    }

    updateModels() {
        let makeSelectVal = this.template.querySelector('.makeSelect').value;
        let modelSelect = this.template.querySelector('.modelSelect');
        if (makeSelectVal != '') {
            this.makeSelected = true;
            modelSelect.removeAttribute('disabled');
            this.currentModelList = Object.getOwnPropertyNames(this.makeMap[makeSelectVal]);
        } else {
            this.makeSelected = false;
        }
    }

    @track
    currentYearList;

    updateYears() {
        let makeSelectVal = this.template.querySelector('.makeSelect').value;
        let modelSelect = this.template.querySelector('.modelSelect');
        if (modelSelect.value != '') {
            this.modelSelected = true;
            this.template.querySelector('.yearSelect').removeAttribute('disabled');
            this.currentYearList = Object.getOwnPropertyNames(this.makeMap[makeSelectVal][modelSelect.value])
        } else {
            this.modelSelected = false;
        }
    }
    
}