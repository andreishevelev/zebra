import ActionsBase from "./ActionsBase.js";
import {By, until} from "selenium-webdriver";

export default class AboutDrivers extends ActionsBase {

    driver;
    pageUrl = 'https://www.thezebra.com/insurance/car/manual/drivers/details/';
    pageTitle = 'Start | Compare car insurance rates | The Zebra';
    maleLocator = By.xpath('//*[@data-cy=\'radio-text-gender-0-0\']');
    femaleLocator = By.xpath('//*[@data-cy=\'radio-text-gender-0-1\']');
    singleLocator = By.xpath('//*[@data-cy=\'radio-text-marital_status-0-0\']');
    marriedLocator = By.xpath('//*[@data-cy=\'radio-text-marital_status-0-1\']');
    divorcedLocator = By.xpath('//*[@data-cy=\'radio-text-marital_status-0-2\']');
    widowedLocator = By.xpath('//*[@data-cy=\'radio-text-marital_status-0-3\']');
    scoreExcellentLocator = By.xpath('//*[@data-cy=\'radio-text-credit_score-0-0\']');
    scoreGoodLocator = By.xpath('//*[@data-cy=\'radio-text-credit_score-0-1\']');
    scoreAverageLocator = By.xpath('//*[@data-cy=\'radio-text-credit_score-0-2\']');
    scorePoorLocator = By.xpath('//*[@data-cy=\'radio-text-credit_score-0-4\']');
    doctoralLocator = By.xpath('//*[@data-cy=\'radio-text-education-0-4\']');
    mastersLocator = By.xpath('//*[@data-cy=\'radio-text-education-0-3\']');
    bachelorsLocator = By.xpath('//*[@data-cy=\'radio-text-education-0-2\']');
    highSchoolLocator = By.xpath('//*[@data-cy=\'radio-text-education-0-1\']');
    noDiplomaLocator = By.xpath('//*[@data-cy=\'radio-text-education-0-0\']');
    moreThanThreeYearsLocator = By.xpath('//*[@data-cy=\'radio-text-insured_length-0-3\']');
    oneToThreeYearsLocator = By.xpath('//*[@data-cy=\'radio-text-insured_length-0-2\']');
    sixToTwelveMonthsLocator = By.xpath('//*[@data-cy=\'radio-text-insured_length-0-1\']');
    lessThanSixMonthsLocator = By.xpath('//*[@data-cy=\'radio-text-insured_length-0-0\']');
    currentCompanyLocatorClick = By.xpath('//*[text()=\'Select current insurance company\']');
    currentCompanyLocatorValue = By.xpath('//*[@id=\'dropdown-current_carrier-0\']//input');
    bodily30to60Locator = By.xpath('//*[@data-cy=\'radio-text-current_bodily_injury_per_person-0-$30k / $60k\']');
    bodily50to100Locator = By.xpath('//*[@data-cy=\'radio-text-current_bodily_injury_per_person-0-$50k / $100k\']');
    bodily100to300Locator = By.xpath('//*[@data-cy=\'radio-current_bodily_injury_per_person-0-$100k / $300k\']');
    bodily250to500Locator = By.xpath('//*[@data-cy=\'radio-text-current_bodily_injury_per_person-0-$250k / $500k\']');
    bodilyDontKnowLocator = By.xpath('//*[@data-cy=\'radio-text-current_bodily_injury_per_person-0-I don’t know\']');
    accidentsYesLocator = By.xpath('//*[@data-cy=\'radio-text-violations-1\']');
    accidentsNoLocator = By.xpath('//*[@data-cy=\'radio-text-violations-0\']');
    emailLocator = By.xpath('//*[@id=\'email-0\']');
    saveToNextYesLocator = By.xpath('//*[@data-cy=\'radio-text-is_interested_in_account-0-true\']');
    saveToNextNoLocator = By.xpath('//*[@data-cy=\'radio-text-is_interested_in_account-0-false\']');
    saveAndContinueLocator = By.xpath('//*[text()=\'Save & continue\']');

    constructor(driver) {
        super();
        this.driver = driver;
    }

    async open() {
        this.driver.get(this.pageUrl);
    }

    async gender(option) {
        await this.driver.wait(until.titleIs(this.pageTitle),50000);
        if (option === 'male') {
            await this.clickVisible(this.maleLocator);
        } else if (option === 'female') {
            await this.clickVisible(this.femaleLocator);
        }
    }

    async maritalStatus(option) {
        if (option === 'single') {
            await this.clickVisible(this.singleLocator);
        } else if (option === 'married') {
            await this.clickVisible(this.marriedLocator);
        } else if (option === 'divorced') {
            await this.clickVisible(this.divorcedLocator);
        } else if (option === 'widowed') {
            await this.clickVisible(this.widowedLocator);
        }
    }

    async creditScore(option) {
        if (option === 'excellent') {
            await this.clickVisible(this.scoreExcellentLocator);
        } else if (option === 'good') {
            await this.clickVisible(this.scoreGoodLocator);
        } else if (option === 'average') {
            await this.clickVisible(this.scoreAverageLocator);
        } else if (option === 'poor') {
            await this.clickVisible(this.scorePoorLocator);
        }
    }

    async education(option) {
        if (option === 'doctoral') {
            await this.clickVisible(this.doctoralLocator);
        } else if (option === 'masters') {
            await this.clickVisible(this.mastersLocator);
        } else if (option === 'bachelors') {
            await this.clickVisible(this.bachelorsLocator);
        } else if (option === 'highSchool') {
            await this.clickVisible(this.highSchoolLocator);
        } else if (option === 'noDiploma') {
            await this.clickVisible(this.noDiplomaLocator);
        }
    }

    async insuranceDuration(option) {
        if (option === 'moreThanThreeYears') {
            await this.clickVisible(this.moreThanThreeYearsLocator);
        } else if (option === 'oneToThreeYears') {
            await this.clickVisible(this.oneToThreeYearsLocator);
        } else if (option === 'sixToTwelveMonths') {
            await this.clickVisible(this.sixToTwelveMonthsLocator);
        } else if (option === 'lessThanSixMonths') {
            await this.clickVisible(this.lessThanSixMonthsLocator);
        }
    }

    async currentCompany(queryValue) {
        await this.dropDownSendKeys(queryValue, this.currentCompanyLocatorClick, this.currentCompanyLocatorValue);
    }

    async bodilyInjuryLimits(option) {
        if (option === 'bodily30to60') {
            await this.clickVisible(this.bodily30to60Locator);
        } else if (option === 'bodily50to100') {
            await this.clickVisible(this.bodily50to100Locator);
        } else if (option === 'bodily100to300') {
            await this.clickVisible(this.bodily100to300Locator);
        } else if (option === 'bodily250to500') {
            await this.clickVisible(this.bodily250to500Locator);
        } else if (option === 'bodilyDontKnow') {
            await this.clickVisible(this.bodilyDontKnowLocator);
        }
    }

    async accidents(option) {
        if (option === 'yes') {
            await this.clickVisible(this.accidentsYesLocator);
        } else if (option === 'no') {
            await this.clickVisible(this.accidentsNoLocator);
        }
    }

    async email(queryValue) {
        await this.sendKeys(queryValue, this.emailLocator);
    }

    async saveToNext(option) {
        if (option === 'yes') {
            await this.clickVisible(this.saveToNextYesLocator);
        } else if (option === 'no') {
            await this.clickVisible(this.saveToNextNoLocator);
        }
    }

    async saveAndContinue() {
        await this.clickVisible(this.saveAndContinueLocator);
    }
}