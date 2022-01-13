import { api, LightningElement, track } from 'lwc';
import HYUNDAIELANTRA from '@salesforce/resourceUrl/hyundaiElantra';

export default class VehicleCustomizer extends LightningElement {

    vehicleImgUrl = HYUNDAIELANTRA;

    //template render variables
    isMakeSelected = false;
    isModelSelected = false;
    isYearSelected = false;
    isOptionBarVisible = false;
    showAlert = false;

    //dictates what options list to show
    optionBarState = '';
    optionBarStateEnums = {
        Colors: 'Colors',
        Accessories: 'Accessories',
        Customizations: 'Customizations'
    }
    
    //variables storing the current values selected
    selectedMake;
    selectedModel;
    selectedYear;

    /*
    TODO:
        Create event from choiceNode that contains recordId of customization/accessory chosen and handle it by adding/removing it from related list.c/sldsComboBox
        Clear accessories/customizations list on change of make/model/year
        Make color option bar a single pick only
        Subtotal component implementation
    */

    //default value to show structure
    @api
    makeMap = {
        Hyundai: {
            Elantra: {
                2020: {
                    Accessories: {
                        Acc1: {
                            Name: 'Acc1',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: '',
                            Selected: false
                        },
                        Acc2: {
                            Name: 'Acc2',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: '',
                            Selected: false
                        },
                        Acc3: {
                            Name: 'Acc3',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: '',
                            Selected: false
                        }
                    },
                    Customizations: {
                        Cust1: {
                            Name: 'Cust1',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: '',
                            Selected: false
                        }
                    },
                    Colors: {
                        Red: {
                            Name: 'Red',
                            ImgUrl: '',
                            Price: '+ $20',
                            RecordId: '',
                            Selected: false
                        }
                    }
                },
                2021: {
                    Accessories: {
                        Acc1: {
                            Name: 'Acc1',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: '',
                            Selected: false
                        }
                    },
                    Customizations: {
                        Cust1: {
                            Name: 'Cust1',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: '',
                            Selected: false
                        }
                    },
                    Colors: {
                        Blue: {
                            Name: 'Blue',
                            ImgUrl: '',
                            Price: '+ $20',
                            RecordId: '',
                            Selected: false
                        }
                    }
                }
            },
            Sonata: {
                2020: {
                    Accessories: {
                        Acc1: {
                            Name: 'Acc1',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: '',
                            Selected: false
                        },
                        Acc2: {
                            Name: 'Acc2',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: '',
                            Selected: false
                        },
                        Acc3: {
                            Name: 'Acc3',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: '',
                            Selected: false
                        }
                    },
                    Customizations: {
                        Cust1: {
                            Name: 'Cust1',
                            ImgUrl: '',
                            Price: '+ $200',
                            RecordId: '',
                            Selected: false
                        }
                    },
                    Colors: {
                        Green: {
                            Name: 'Green',
                            ImgUrl: '',
                            Price: '+ $20',
                            RecordId: '',
                            Selected: false
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
            RecordId: '',
            Selected: false
        }
    ]

    @track
    currentModelList;
    
    get makeList() {
        return Object.getOwnPropertyNames(this.makeMap);
    }

    updateModels() {
        this.selectedMake = this.template.querySelector('.makeSelect').value;
        let modelSelect = this.template.querySelector('.modelSelect');
        if (this.selectedMake != '') {
            this.isMakeSelected = true;
            modelSelect.removeAttribute('disabled');
            this.currentModelList = Object.getOwnPropertyNames(this.makeMap[this.selectedMake]);
        } else {
            this.isMakeSelected = false;
        }
        this.isOptionBarVisible = false;
    }

    @track
    currentYearList;

    updateYears() {
        let modelSelect = this.template.querySelector('.modelSelect');
        this.selectedModel = modelSelect.value;
        if (this.selectedModel != '') {
            this.isModelSelected = true;
            this.template.querySelector('.yearSelect').removeAttribute('disabled');
            this.currentYearList = Object.getOwnPropertyNames(this.makeMap[this.selectedMake][this.selectedModel])
        } else {
            this.isModelSelected = false;
        }
        this.isOptionBarVisible = false;
    }

    yearSelected() {
        this.isYearSelected = true;
        this.selectedYear = this.template.querySelector('.yearSelect').value;
        this.closeAlert();
        this.isOptionBarVisible = false;
    }

    closeAlert() {
        this.showAlert = false;
    }

    updateOptionBarColors() {
        this.alertCheck();
        if (this.showAlert) {
            return;
        }

        if (this.isOptionBarVisible) {
            if (this.optionBarState == this.optionBarStateEnums.Colors) {
                this.isOptionBarVisible = false;
                return;
            }
        } else {
            this.isOptionBarVisible = true;
        }

        this.currentOptionsList = Object.values(this.makeMap[this.template.querySelector('.makeSelect').value]
            [this.template.querySelector('.modelSelect').value]
            [this.template.querySelector('.yearSelect').value]
            [this.optionBarStateEnums.Colors]);
        this.optionBarState = this.optionBarStateEnums.Colors;
    }

    updateOptionBarCustomizations() {
        this.alertCheck();
        if (this.showAlert) {
            return;
        }

        if (this.isOptionBarVisible) {
            if (this.optionBarState == this.optionBarStateEnums.Customizations) {
                this.isOptionBarVisible = false;
                return;
            }
        } else {
            this.isOptionBarVisible = true;
        }

        this.currentOptionsList = Object.values(this.makeMap[this.template.querySelector('.makeSelect').value]
            [this.template.querySelector('.modelSelect').value]
            [this.template.querySelector('.yearSelect').value]
            [this.optionBarStateEnums.Customizations]);
        this.optionBarState = this.optionBarStateEnums.Customizations;
    }

    updateOptionBarAccessories() {
        this.alertCheck();
        if (this.showAlert) {
            return;
        }

        if (this.isOptionBarVisible) {
            if (this.optionBarState == this.optionBarStateEnums.Accessories) {
                this.isOptionBarVisible = false;
                return;
            }
        } else {
            this.isOptionBarVisible = true;
        }

        this.currentOptionsList = Object.values(this.makeMap[this.template.querySelector('.makeSelect').value]
            [this.template.querySelector('.modelSelect').value]
            [this.template.querySelector('.yearSelect').value]
            [this.optionBarStateEnums.Accessories]);
        this.optionBarState = this.optionBarStateEnums.Accessories;
    }

    alertCheck() {
        if (this.isMakeSelected && this.isModelSelected && this.isYearSelected) {
            this.showAlert = false;
        } else {
            this.showAlert = true;
        }
    }

    submitOrder() {
        this.alertCheck();
    }
}