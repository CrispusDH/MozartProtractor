import {browser, by, element, ElementFinder, protractor, ProtractorBy, ExpectedConditions as EC} from "protractor";
import {Locator} from "protractor/built/locators";
import {By} from "selenium-webdriver";
import {CoreConstants} from '../constants/core.constants'

export class WaitConditions {
/*
    private findElementByTestId(dataTestIdName: string) : ElementFinder {
        return element(by['data-test-id'](dataTestIdName));
    }

*/
    public async enabled(locator: By | ProtractorBy) {
        await browser.wait(EC.elementToBeClickable(element(locator)), CoreConstants.WAIT_TIMEOUT)
    }

}