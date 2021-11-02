import ChromeDriver from 'chromedriver'
import * as assert from "assert";
import {Builder} from "selenium-webdriver";
import AutoInsurancePage from "./pages/AutoInsurancePage.js";
import CarInsuranceStart from "./pages/CarIncuranceStart.js";
import CarInsuranceVehicleSelect from "./pages/CarInsuranceVehicleSelect.js";
import CarInsuranceVehiclesDetails from "./pages/CarInsuranceVehiclesDetails.js";
import AddDrivers from "./pages/AddDrivers.js";
import AboutDrivers from "./pages/AboutDrivers.js";
import CoverageSection from "./pages/CoverageSection.js";
import RateSelect from "./pages/RateSelect.js";
import Car from "./objects/Car.js";
import Driver from "./objects/Driver.js";

/** Uncomment active browser */
let browser = 'chrome';
//let browser = 'safari';

// Test suite
describe("Car insurance Estimator", () => {

    /**End-to-end test*/
    it("\'should estimate Quotes", async () => {
        let driver = await new Builder().forBrowser(browser).build();

        //Pages identification region
        let autoInsurancePage = new AutoInsurancePage(driver);
        let carInsuranceStart = new CarInsuranceStart(driver);
        let carInsuranceVehicleSelect = new CarInsuranceVehicleSelect(driver);
        let carInsuranceVehicleDetails = new CarInsuranceVehiclesDetails(driver);
        let addDrivers = new AddDrivers(driver);
        let aboutDrivers = new AboutDrivers(driver);
        let coverageSection = new CoverageSection(driver);
        let rateSelect = new RateSelect(driver);
        //end pages identification region

        //Test data region
        const car1 = new Car(2011, 'Honda', 'Civic', 'EX 2dr Coupe 5M',
            'paid', 'personal');

        const driver1 = new Driver(78745, 'Andrei', 'Shevelev', '04021982',
            '8700 Brodie Lane', 'GEICO', 'shevelev.andrew.job@gmail.com',
            'Per year', 30, 'yes', 'rent', 'payingTooMuch',
            'male', 'single', 'excellent', 'highSchool',
            'oneToThreeYears', 'bodily50to100', 'no', 'no');

        const testingDriver = driver1;
        const testingCar = car1;
        //end test data region

        let expectedResult = 'Get quote';

        //Steps
        try {
            await autoInsurancePage.open();
            await autoInsurancePage.zipCode1(testingDriver.zipCode);
            await autoInsurancePage.startButton1();
            await carInsuranceStart.haveInsurance(testingDriver.haveInsurance);
            await carInsuranceStart.ownOrRent(testingDriver.ownOrRent);
            await carInsuranceStart.whyShopping(testingDriver.whyShopping);
            await carInsuranceStart.saveAndContinue();
            await carInsuranceVehicleSelect.vehicleYear(testingCar.vehicleYear);
            await carInsuranceVehicleSelect.vehicleMake(testingCar.vehicleMake);
            await carInsuranceVehicleSelect.vehicleModel(testingCar.vehicleModel);
            await carInsuranceVehicleSelect.vehicleTrim(testingCar.vehicleTrim);
            await carInsuranceVehicleSelect.saveAndContinue();
            await carInsuranceVehicleDetails.paidOrLease(testingCar.paidOrLease);
            await carInsuranceVehicleDetails.useFor(testingCar.useFor);
            await carInsuranceVehicleDetails.milesFrequency(testingDriver.milesFrequency);
            await carInsuranceVehicleDetails.miles(testingDriver.miles);
            await carInsuranceVehicleDetails.saveAndContinue();
            await addDrivers.firstName(testingDriver.firstName);
            await addDrivers.lastName(testingDriver.lastName);
            await addDrivers.birthDate(testingDriver.birthDate);
            await addDrivers.address(testingDriver.address);
            await addDrivers.saveAndContinue();
            await aboutDrivers.gender(testingDriver.gender);
            await aboutDrivers.maritalStatus(testingDriver.maritalStatus);
            await aboutDrivers.creditScore(testingDriver.creditScore);
            await aboutDrivers.education(testingDriver.education);
            await aboutDrivers.insuranceDuration(testingDriver.insuranceDuration);
            await aboutDrivers.currentCompany(testingDriver.currentCompany);
            await aboutDrivers.bodilyInjuryLimits(testingDriver.bodilyInjuryLimits);
            await aboutDrivers.accidents(testingDriver.accidents);
            await aboutDrivers.email(testingDriver.email);
            await aboutDrivers.saveToNext(testingDriver.saveToNext);
            await aboutDrivers.saveAndContinue();
            await coverageSection.best();
            await rateSelect.waitQuotes();

            let actualResult = await rateSelect.getQuoteId();
            assert.ok(actualResult === expectedResult, 'Quotes unavailable');

        } finally {
            await driver.quit();
        }
    });
});