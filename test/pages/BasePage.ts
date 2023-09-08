import { By, WebElement, until } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome"

export default class BasePage {

    driver: Driver;

    constructor(driver: Driver){
        this.driver = driver;
    }

    async clickByCss(css: string){
        let element = await this.getElementByCss(css);
        await element.click();
    }

    async hoverByCss(css: string){
        let element = await this.driver.wait(until.elementLocated(By.css(css)),10000);
        let actions = this.driver.actions();
        actions.move({x: 0, y: 0, duration: 100, origin: element}).perform();
    }

    async getElementByCss(css: string){
        return await this.driver.wait(until.elementLocated(By.css(css)),10000);
    }

    async waitForElementToBeStaleByCss(css: string){
        let we = await this.getElementByCss(css);
        return await this.driver.wait(until.stalenessOf(we),10000);
    }

    async waitForTextInObjectLocatedByCssToInclude(css: string, text: string) {
        let found = false;
        let foundText: string;
        let attempt = 0;
        let attemptsMax = 20;
        let delay = 500; //ms
        let element: WebElement = null;

        while (attempt < attemptsMax && found == false) {
            try{
                attempt++;
                console.log("Attempt " + attempt);
                element = await this.driver.wait(until.elementLocated(By.css(css)),delay);
                foundText = await element.getText();
                if (foundText.includes(text)) {
                    return true;
                }                     
            } catch(e) {
                console.log("Caught while waiting: " + e);
            }
           
        }
        console.log("Text '" + text + "' could not be found. Actual text was '" + foundText + "'");
        return false;   
    }
}