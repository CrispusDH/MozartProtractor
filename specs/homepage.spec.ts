/// <reference types="jasmine-protractor-matchers" />
import { HomePage } from '../page_objects/home.page'
import {browser, by, By, element} from "protractor";

describe('Verifying project generation ', function () {

    it('test', async function () {

        await new HomePage()
            .openHomePage()
            .clickOnCreateButton()/*
            .typeProjectName('test2856')
            .clickOnSaveButton();
*/
        await browser.sleep(5000);

            //I want to do casting my custom locator 'data-test-id' to By | ProtractorBy in the closest time
            //.click(element(by['data-test-id']('create-project-button')));

    })

})