import ChromeDriver from 'chromedriver'
import * as assert from "assert";
import {Builder} from "selenium-webdriver";
import AutoInsurancePage from "./pages/AutoInsurancePage.js";

/** Uncomment active browser */
let browser = 'chrome';
//let browser = 'safari';

let driver = await new Builder().forBrowser(browser).build();

//Pages identification region
let autoInsurancePage = new AutoInsurancePage(driver);
//end pages identification region

///Test suite
describe("Ui elements", () => {

    it("\'Your ZIP code is required.\' message should be displayed when trying to send" +
        " empty zip code", async () => {

        let expectedResult = 'Your ZIP code is required.';

        //Steps
        try {
            await autoInsurancePage.open();
            await autoInsurancePage.startButton1();
            let actualResult = await autoInsurancePage.getZipRequired();

            assert.ok(actualResult === expectedResult)

        } finally {
        }
    });

    it("'Average twelve-month premiums for every state in the U.S.:' list" +
        " should contain \'Wyoming\'", async () => {

        let expectedResult = 'Wyoming';

        //Steps
        try {
            await autoInsurancePage.viewMoreUS();

            let actualResult = await autoInsurancePage.visibleWyoming();
            assert.ok(actualResult === expectedResult)

        } finally {
            await driver.quit();
        }
    });
});