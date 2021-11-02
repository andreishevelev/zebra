import ActionsBase from "./ActionsBase.js";
import {By, Key, until} from "selenium-webdriver";

export default class AddDrivers extends ActionsBase {

    driver;
    pageUrl = 'https://www.thezebra.com/insurance/car/manual/drivers/select/';
    pageTitle = 'Add your drivers | Compare car insurance rates | The Zebra';
    firstNameLocator = By.xpath('//*[@id=\'first_name-0\']');
    lastNameLocator = By.xpath('//*[@id=\'last_name-0\']');
    birthDateLocator = By.xpath('//*[@id=\'date_of_birth-0\']');
    addressLocator = By.xpath('//*[@id=\'garaging_address\']');
    addressSuggestionsLocator = By.xpath('//*[@id=\'address-suggestion-1\']');
    saveAndContinueLocator = By.xpath('//*[text()=\'Save & continue\']');

    constructor(driver) {
        super();
        this.driver = driver;
    }

    async open() {
        this.driver.get(this.pageUrl);
    }

    async firstName(queryValue) {
        await this.driver.wait(until.titleIs(this.pageTitle),50000);
        await this.sendKeys(queryValue, this.firstNameLocator);
    }

    async lastName(queryValue) {
        await this.sendKeys(queryValue, this.lastNameLocator);
    }

    async birthDate(queryValue) {
        await this.sendKeys(queryValue, this.birthDateLocator);
    }

    async address(queryValue) {
        await this.sendKeys(queryValue, this.addressLocator);
        await this.driver.wait(until.elementLocated(this.addressSuggestionsLocator));
        await this.clickVisible(this.addressSuggestionsLocator);
    }

    async saveAndContinue() {
        await this.clickVisible(this.saveAndContinueLocator);
    }

}