import {Key, until} from "selenium-webdriver";

export default class ActionsBase {

    constructor(driver) {
        this.driver = driver;
    }

    async dropDownSendKeys(queryValue, locatorsClick, locatorsValue) {
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(locatorsClick)),50000);
        await this.clickVisible(locatorsClick);
        await this.sendKeys(queryValue, locatorsValue);
        await this.driver.findElement(locatorsValue).sendKeys(Key.ENTER);
    }

    async clickVisible(locators) {
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(locators)),50000);
        let locator = await this.driver.findElements(locators);
        locator[0].click();
    }

    async sendKeysElementNumber(queryValue, locators, position) {
        let locator = await this.driver.findElements(locators);
        locator[position].sendKeys(queryValue);
    }

    async sendKeys(queryValue, locators) {
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(locators)),50000);
        let locator = await this.driver.findElements(locators);
        locator[0].sendKeys(queryValue);
    }

    async clickElementNumber(locators, position) {
        let locator = await this.driver.findElements(locators);
        locator[position].click();
    }

    async aGetKeys(locators) {
        await this.driver.wait(until.elementLocated(locators),50000);
        let locator = await this.driver.findElements(locators);
        return locator[0].get;
    }
}