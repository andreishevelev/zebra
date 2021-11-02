import {By, Key, until} from "selenium-webdriver";
import ActionsBase from "./ActionsBase.js";

export default class CarInsuranceVehiclesDetails extends ActionsBase {

    driver;
    pageUrl = 'https://www.thezebra.com/insurance/car/manual/vehicles/details/';
    pageTitle = 'Compare car insurance rates: Fast, Free, Simple | The Zebra';
    ownPaidLocator = By.xpath('//*[@data-cy=\'radio-text-vehicle-ownership-0-0\']')
    ownPayLocatorLocator = By.xpath('//*[@data-cy=\'radio-text-vehicle-ownership-0-2\']')
    leaseLocator = By.xpath('//*[@data-cy=\'radio-text-vehicle-ownership-0-1\']')
    usePersonalLocator = By.xpath('//*[@data-cy=\'radio-text-vehicle-primary_use-0-0\']')
    usePleasureLocator = By.xpath('//*[@data-cy=\'radio-text-vehicle-primary_use-0-1\']')
    useFarmLocator = By.xpath('//*[@data-cy=\'radio-text-vehicle-primary_use-0-4\']')
    useBusinessLocator = By.xpath('//*[@data-cy=\'radio-text-vehicle-primary_use-0-2\']')
    selectFrequencyLocatorClick = By.xpath('//*[@id=\'dropdown-mileagePeriod-0\']/div/div');
    selectFrequencyLocatorInputClick = By.xpath('//*[@id=\'dropdown-mileagePeriod-0\']/div/div/input');
    milesLocatorClick = By.xpath('//*[@id=\'miles-0\']');
    saveAndContinueLocator = By.xpath('//*[text()=\'Save & continue\']');

    constructor(driver) {
        super();
        this.driver = driver;
    }

    async open() {
        this.driver.get(this.pageUrl);
    }

    async paidOrLease(option) {
        await this.driver.wait(until.titleIs(this.pageTitle),50000);

        if (option === 'lease') {
            await this.clickVisible(this.leaseLocator);
        } else if (option === 'paid') {
            await this.clickVisible(this.ownPaidLocator);
        } else if (option === 'makingPayments') {
            await this.clickVisible(this.ownPayLocatorLocator);
        }
    }

    async useFor(option) {

        if (option === 'personal') {
            await this.clickVisible(this.usePersonalLocator);
        } else if (option === 'pleasure') {
            await this.clickVisible(this.usePleasureLocator);
        } else if (option === 'farm') {
            await this.clickVisible(this.useFarmLocator);
        } else if (option === 'business') {
            await this.clickVisible(this.useBusinessLocator);
        }
    }

    async milesFrequency(option) {
        if (option === 'per day') {
            await this.driver.findElement(this.selectFrequencyLocatorClick).click();
            await this.driver.findElement(this.selectFrequencyLocatorInputClick).sendKeys(Key.ENTER);
        } else if (option === 'per week') {
            await this.driver.findElement(this.selectFrequencyLocatorClick).click();
            await this.driver.findElement(this.selectFrequencyLocatorInputClick).sendKeys(Key.DOWN);
            await this.driver.findElement(this.selectFrequencyLocatorInputClick).sendKeys(Key.ENTER);
        } else if (option === 'per month') {
            await this.driver.findElement(this.selectFrequencyLocatorClick).click();
            await this.driver.findElement(this.selectFrequencyLocatorInputClick).sendKeys(Key.DOWN);
            await this.driver.findElement(this.selectFrequencyLocatorInputClick).sendKeys(Key.DOWN);
            await this.driver.findElement(this.selectFrequencyLocatorInputClick).sendKeys(Key.ENTER);
        } else if (option === 'per year') {
            await this.driver.findElement(this.selectFrequencyLocatorClick).click();
            await this.driver.findElement(this.selectFrequencyLocatorInputClick).sendKeys(Key.DOWN);
            await this.driver.findElement(this.selectFrequencyLocatorInputClick).sendKeys(Key.DOWN);
            await this.driver.findElement(this.selectFrequencyLocatorInputClick).sendKeys(Key.DOWN);
            await this.driver.findElement(this.selectFrequencyLocatorInputClick).sendKeys(Key.ENTER);
        }
    }

    async miles(queryValue) {
        await this.dropDownSendKeys(queryValue, this.milesLocatorClick, this.milesLocatorClick);
    }

    async saveAndContinue() {
        await this.clickVisible(this.saveAndContinueLocator);
    }
}