import { api, LightningElement } from 'lwc';

export default class SldsComboBox extends LightningElement {
    @api
    comboLabel = 'default';
    @api
    optionsList = ['option1', 'option2', 'option3'];
}