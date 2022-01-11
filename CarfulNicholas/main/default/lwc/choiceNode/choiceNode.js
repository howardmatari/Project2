import { api, LightningElement } from 'lwc';
import ARMOREDGLOVES from '@salesforce/resourceUrl/armoredGloves';

export default class ChoiceNode extends LightningElement {
    @api
    imgUrl = ARMOREDGLOVES;
    @api
    choiceName = 'defaultName';
    @api
    choicePrice = '+ $200';
}