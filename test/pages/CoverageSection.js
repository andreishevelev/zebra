import ActionsBase from "./ActionsBase.js";
import {By, until} from "selenium-webdriver";

export default class CoverageSection extends ActionsBase {

    driver;
    pageUrl = 'https://www.thezebra.com/insurance/car/manual/coverage-selection/';
    pageTitle = 'Coverage selection | Compare car insurance rates | The Zebra';
    bestLocator = By.xpath('//*[@data-cy=\'show-quotes-best\']/span');

    constructor(driver) {
        super();
        this.driver = driver;
    }

    async open() {
        this.driver.get(this.pageUrl);
    }

    async best() {
        await this.driver.wait(until.titleIs(this.pageTitle),50000);
        await this.driver.wait(until.elementLocated(this.bestLocator),50000);
        await this.clickVisible(this.bestLocator);
        await this.clickVisible(this.bestLocator);
        await this.clickVisible(this.bestLocator);
        await this.clickVisible(this.bestLocator);
    }
}