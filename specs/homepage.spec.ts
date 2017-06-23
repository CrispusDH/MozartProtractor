/// <reference types="jasmine-protractor-matchers" />
import { HomePage } from '../page_objects/home.page'
import {By} from "selenium-webdriver";

describe('Verifying project generation ', function () {
    const createButton = By.css("#projects-create-configuration");

    it('test', async function () {
        await new HomePage()
                .openHomePage()
                .click(createButton);

            //I want to do casting my custom locator 'data-test-id' to By | ProtractorBy in the closest time
            //.click(element(by['data-test-id']('create-project-button')));

    })

})