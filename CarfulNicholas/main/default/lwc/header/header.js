import { LightningElement } from 'lwc';
import LOGO from '@salesforce/resourceUrl/caravanlogo';

export default class Header extends LightningElement {
    logoUrl = LOGO;
    tabList = [
        {
            tabName: 'Vehicle Catalogue',
            tabLink: ''
        },
        {
            tabName: 'Vehicle Builder',
            tabLink: ''
        },
        {
            tabName: 'About Carful',
            tabLink: '/aboutcarful'
        }
    ]

    goToHomePage() {
        console.log('hi');
        window.location = window.location.origin;
    }
}