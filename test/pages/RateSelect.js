import ActionsBase from "./ActionsBase.js";
import {By, until} from "selenium-webdriver";

export default class RateSelect extends ActionsBase {

    driver;
    pageUrl = 'https://www.thezebra.com/z/rate-select/';
    pageTitle = 'Compare Car Insurance Rates: Fast, Free, Simple | The Zebra';
    editDetails = By.xpath('//*[@id=\'rateSelectEditBtn\']');
    getQuotes = By.xpath('//*[text()=\'Get quote\']');

    constructor(driver) {
        super();
        this.driver = driver;
    }

    async open() {
        this.driver.get(this.pageUrl);
    }

    async waitQuotes() {
        await this.driver.wait(until.titleIs(this.pageTitle),100000);
        await this.driver.wait(until.elementIsEnabled(this.driver.findElement(this.editDetails)),100000);
    }

    async getQuoteId() {
        await this.driver.wait(until.elementLocated(this.getQuotes));
        let locator = await this.driver.findElements(this.getQuotes);
        return locator[0].getText();
    }
}