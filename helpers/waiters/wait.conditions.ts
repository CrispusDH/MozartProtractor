import {browser, by, element, ElementFinder, protractor, ProtractorBy, ProtractorExpectedConditions} from "protractor";
import {Locator} from "protractor/built/locators";
import {By} from "selenium-webdriver";
import {CoreConstants} from '../constants/core.constants'

export class WaitConditions {

    private EC: ProtractorExpectedConditions = protractor.ExpectedConditions;
    readonly coreConstants = new CoreConstants();
/*
    private findElementByTestId(dataTestIdName: string) : ElementFinder {
        return element(by['data-test-id'](dataTestIdName));
    }
 */
    private findElement(locator: By | ProtractorBy) : ElementFinder {
        return element(locator)
    }

    public async enabled(locator: By | ProtractorBy) {
        await browser.wait(this.EC.elementToBeClickable(this.findElement(locator)), this.coreConstants.WAIT_TIMEOUT)
    }

}