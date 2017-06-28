import {browser, element, ElementFinder, protractor, ProtractorBy} from 'protractor'
import {CoreConstants} from '../constants/core.constants'
import {HomePage} from '../../page_objects/home.page'
import {WaitConditions} from '../waiters/wait.conditions'
import {By} from "selenium-webdriver";

export abstract class BasePage {

    private conditions: WaitConditions = new WaitConditions();

    openHomePage() : HomePage {
        this.open();
        return new HomePage();
    }

    private async open() {
        console.log('open start');
        await browser.get(CoreConstants.BASE_URL);
        console.log('open was done')
    }

    async click(locator: By | ProtractorBy){
        console.log('click start');
            await this.conditions.enabled(locator);
            await element(locator).click();
        console.log('click end');
        }

    async clearInput(locator: By | ProtractorBy){
        await this.conditions.enabled(locator);
        await element(locator).clear()
    }

    async type(text: string, locator: By | ProtractorBy){
        await this.clearInput(locator);
        await this.conditions.enabled(locator);
        await element(locator).sendKeys(text)
    }

}