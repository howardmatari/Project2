import { api, LightningElement, track } from 'lwc';
import HYUNDAIELANTRA from '@salesforce/resourceUrl/hyundaiElantra';

export default class VehicleCustomizer extends LightningElement {
    vehicleImgUrl = HYUNDAIELANTRA;
    makeSelected = false;
    modelSelected = false;
    optionBarVisible = false;
    showAlert = false;
    optionBarState = '';
    selectedColor;
    selectedCustomizationsList = [];
    selectedAccessoriesList = [];
    /*
    TODO:
        Create event from choiceNode that contains recordId of customization/accessory chosen and handle it by adding/removing it from related list.c/sldsComboBox
        Clear accessories/customizations list on change of make/model/year
        Make color option bar a single pick only
        Subtotal component implementation
    */
    @api
    makeMap = {
        Hyundai: {
            Elantra: {
                2020: {
                    Accessories: {
                        Acc1: {
                            Name: 'acc1',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: ''
                        },
                        Acc2: {
                            Name: 'acc2',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: ''
                        },
                        Acc3: {
                            Name: 'acc3',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: ''
                        }
                    },
                    Customizations: {
                        Cust1: {
                            Name: 'cust1',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: ''
                        }
                    },
                    Colors: {
                        Red: {
                            Name: 'Red',
                            ImgUrl: '',
                            Price: '+ $20',
                            RecordId: ''
                        }
                    }
                },
                2021: {
                    Accessories: {
                        Acc1: {
                            Name: 'acc1',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: ''
                        }
                    },
                    Customizations: {
                        Cust1: {
                            Name: 'acc1',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: ''
                        }
                    },
                    Colors: {
                        Red: {
                            Name: 'Blue',
                            ImgUrl: '',
                            Price: '+ $20',
                            RecordId: ''
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
                            Price: '+ $200',
                            RecordId: ''
                        },
                        Acc2: {
                            Name: 'acc2',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: ''
                        },
                        Acc3: {
                            Name: 'acc3',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: ''
                        }
                    },
                    Customizations: {
                        Cust1: {
                            Name: 'acc1',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: ''
                        }
                    },
                    Colors: {
                        Red: {
                            Name: 'Green',
                            ImgUrl: '',
                            Price: '+ $20',
                            RecordId: ''
                        }
                    }
                }
            }
        }
    }

    @track
    currentOptionsList = [
        {
            Name: 'acc1',
            ImgUrl: '',
            Price: '+ $200',
            RecordId: ''
        },
        {
            Name: 'acc2',
            ImgUrl: '',
            Price: '+ $200',
            RecordId: ''
        }
    ]

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
        this.optionBarVisible = false;
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
        this.optionBarVisible = false;
    }

    yearSelected() {
        this.closeAlert();
        this.optionBarVisible = false;
    }

    closeAlert() {
        this.showAlert = false;
    }

    updateOptionBarColors() {
        this.alertCheck();
        if (this.showAlert) {
            return;
        }

        if (this.optionBarVisible) {
            if (this.optionBarState == 'Colors') {
                this.optionBarVisible = false;
                return;
            }
        } else {
            this.optionBarVisible = true;
        }

        this.currentOptionsList = Object.values(this.makeMap[this.template.querySelector('.makeSelect').value]
            [this.template.querySelector('.modelSelect').value]
            [this.template.querySelector('.yearSelect').value]
            ['Colors']);
        this.optionBarState = 'Colors';
    }

    updateOptionBarCustomizations() {
        this.alertCheck();
        if (this.showAlert) {
            return;
        }
        this.optionBarVisible = !this.optionBarVisible;
    }

    updateOptionBarAccessories() {
        this.alertCheck();
        if (this.showAlert) {
            return;
        }
        this.optionBarVisible = !this.optionBarVisible;
    }

    alertCheck() {
        if (this.makeSelected && this.modelSelected && this.template.querySelector('.yearSelect').value != '') {
            this.showAlert = false;
        } else {
            this.showAlert = true;
        }
    }

    submitOrder() {
        this.alertCheck();
    }
}