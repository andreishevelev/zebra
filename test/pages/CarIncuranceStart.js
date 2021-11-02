import {By, until} from "selenium-webdriver";
import ActionsBase from "./ActionsBase.js";

export default class CarInsuranceStart extends ActionsBase {

    driver;
    pageUrl = 'https://www.thezebra.com/insurance/car/manual/start/';
    pageTitle = 'Start | Compare car insurance rates | The Zebra';
    haveInsuranceYesLocator = By.xpath('//*[@data-cy=\'radio-text-currently_insured-0-1\']');
    haveInsuranceNoLocator = By.xpath('//*[@data-cy=\'radio-text-currently_insured-0-0\']');
    ownHomeLocator = By.xpath('//*[@data-cy=\'radio-text-residence_ownership-0-0\']');
    ownCondoLocator = By.xpath('//*[@data-cy=\'radio-text-residence_ownership-0-1\']');
    rentLocator = By.xpath('//*[@data-cy=\'radio-text-residence_ownership-0-2\']');
    ownRentOtherLocator = By.xpath('//*[@data-cy=\'radio-text-residence_ownership-0-3\']');
    payingTooMuchLocator = By.xpath('//*[@data-cy=\'radio-text-user_intent-0-PAYING_TOO_MUCH\']');
    buyingCarLocator = By.xpath('//*[@data-cy=\'radio-text-user_intent-0-BUYING_CAR_SOON\']');
    lifeEventLocator = By.xpath('//*[@data-cy=\'radio-text-user_intent-0-LIFE_EVENT\']');
    justLookingLocator = By.xpath('//*[@data-cy=\'radio-text-user_intent-0-JUST_LOOKING\']');
    saveAndContinueLocator = By.xpath('//*[@data-cy=\'section-continue\']');

    constructor(driver) {
        super();
        this.driver = driver;
    }

    async open() {
        this.driver.get(this.pageUrl);
    }

    async haveInsurance(option) {
        await this.driver.wait(until.titleIs(this.pageTitle),50000);

        if (option === 'yes') {
            await this.clickVisible(this.haveInsuranceYesLocator);
        } else if (option === 'no') {
            await this.clickVisible(this.haveInsuranceNoLocator);
        }
    }

    async ownOrRent(option) {
        if (option === 'ownHome') {
            await this.clickVisible(this.ownHomeLocator);
        } else if (option === 'ownCondo') {
            await this.clickVisible(this.ownCondoLocator);
        } else if (option === 'rent') {
            await this.clickVisible(this.rentLocator);
        } else if (option === 'other') {
            await this.clickVisible(this.ownRentOtherLocator);
        }
    }

    async whyShopping(option) {

        if (option === 'payingTooMuch') {
            await this.clickVisible(this.payingTooMuchLocator);
        } else if (option === 'buyingCar') {
            await this.clickVisible(this.buyingCarLocator);
        } else if (option === 'lifeEvent') {
            await this.clickVisible(this.lifeEventLocator);
        } else if (option === 'justLooking') {
            await this.clickVisible(this.justLookingLocator);
        }
    }

    async saveAndContinue() {
        await this.clickVisible(this.saveAndContinueLocator);
    }
}