import {By, until} from "selenium-webdriver";
import ActionsBase from "./ActionsBase.js";

export default class AutoInsurancePage extends ActionsBase {

    driver;
    pageUrl = 'https://www.thezebra.com/auto-insurance/';
    pageTitle = 'Compare 2021 Car Insurance Rates Side-by-Side | The Zebra';
    zipLocators = By.xpath('//*[@class=\'input-wrapper\']/input');
    startButtonLocators = By.xpath('//*[@class=\'input-group-append\']/button');
    zipRequiredMessageLocator = By.xpath('//*[@class=\'zip-error-text\']');
    wyomingLocator = By.xpath('//*[text()=\'Wyoming\']');
    viewMoreUSLocators = By.xpath('//*[@class=\'expand-table-btn-wrapper\']/button');

    constructor(driver) {
        super();
        this.driver = driver;
    }

    async open() {
        await this.driver.get(this.pageUrl);
    }

    async zipCode1(queryValue) {
        await this.sendKeys(queryValue, this.zipLocators);
    }

    async getZipCode1() {
        await this.aGetKeys(this.zipLocators);
    }

    async startButton1() {
        await this.clickElementNumber(this.startButtonLocators, 0);
    }

    async getZipRequired() {
        await this.driver.wait(until.elementLocated(this.zipRequiredMessageLocator));
        return this.driver.findElement(this.zipRequiredMessageLocator).getText();
    }

    async visibleWyoming() {
        return await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.wyomingLocator))).getText();
    }

    async viewMoreUS() {
        await this.clickElementNumber(this.viewMoreUSLocators, 1);
    }
}