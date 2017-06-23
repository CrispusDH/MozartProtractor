import {browser, element, ElementFinder, protractor, ProtractorBy} from 'protractor'
import {CoreConstants} from '../constants/core.constants'
import {HomePage} from '../../page_objects/home.page'
import {WaitConditions} from '../waiters/wait.conditions'
import {By} from "selenium-webdriver";

export abstract class BasePage {

    readonly coreConstants = new CoreConstants();
    private conditions: WaitConditions = new WaitConditions();

    openHomePage() : HomePage {
        this.open();
        return new HomePage();
    }

    private async open() {
        await browser.get(this.coreConstants.BASE_URL);
    }

    async click(locator?: By | ProtractorBy, elementFinder?: ElementFinder){
        if (elementFinder)
            await elementFinder.click();
        else if (locator) {
            await this.conditions.enabled(locator);
            await element(locator).click();
        }
    }

}