import {browser, element, ElementFinder, protractor, ProtractorBy} from 'protractor'
import {WaitConditions} from '../waiters/wait.conditions'
import {By} from "selenium-webdriver";

export abstract class BasePage {

    private conditions: WaitConditions = new WaitConditions();

    async click(locator: By | ProtractorBy){
            await this.conditions.clickable(locator);
            await element(locator).click();
            console.log('click was wait and done')
        }

    async clearInput(locator: By | ProtractorBy){
        await this.conditions.clickable(locator);
        await element(locator).clear()
    }

    async type(text: string, locator: By | ProtractorBy){
        await this.clearInput(locator);
        await this.conditions.clickable(locator);
        await element(locator).sendKeys(text)
    }

}