import {By, Key, until} from "selenium-webdriver";
import ActionsBase from "./ActionsBase.js";

export default class CarInsuranceVehicleSelect extends ActionsBase {

    driver;
    pageUrl = 'https://www.thezebra.com/insurance/car/manual/vehicles/select/';
    pageTitle = 'Add your vehicles | Compare car insurance rates | The Zebra';
    vehicleYearLocatorClick = By.xpath('//*[text()=\'Select vehicle year\']');
    vehicleYearLocatorValue = By.xpath('//*[@id=\'dropdown-vehicle-year-0\']//input');
    vehicleMakeLocatorClick = By.xpath('//*[text()=\'Select vehicle make\']');
    vehicleMakeLocatorValue = By.xpath('//*[@id=\'dropdown-vehicle-make-0\']//input');
    vehicleModelLocatorClick = By.xpath('//*[text()=\'Select vehicle model\']');
    vehicleModelLocatorValue = By.xpath('//*[@id=\'dropdown-vehicle-model-0\']//input');
    vehicleTrimLocatorClick = By.xpath('//*[text()=\'Select vehicle trim\']');
    vehicleTrimLocatorValue = By.xpath('//*[@id=\'dropdown-input-vehicle-submodel-0\']');
    saveAndContinueLocator = By.xpath('//*[text()=\'Save & continue\']');

    constructor(driver) {
        super();
        this.driver = driver;
    }

    async open() {
        this.driver.get(this.pageUrl);
    }

    async vehicleYear(queryValue) {
        await this.driver.wait(until.titleIs(this.pageTitle),50000);
        await this.dropDownSendKeys(queryValue, this.vehicleYearLocatorClick, this.vehicleYearLocatorValue);
    }

    async vehicleMake(queryValue) {
        await this.dropDownSendKeys(queryValue, this.vehicleMakeLocatorClick, this.vehicleMakeLocatorValue);
    }

    async vehicleModel(queryValue) {
        await this.dropDownSendKeys(queryValue, this.vehicleModelLocatorClick, this.vehicleModelLocatorValue);
    }

    async vehicleTrim(queryValue) {
        await this.dropDownSendKeys(queryValue, this.vehicleTrimLocatorClick, this.vehicleTrimLocatorValue);
    }

    async saveAndContinue() {
        await this.clickVisible(this.saveAndContinueLocator);
    }

}