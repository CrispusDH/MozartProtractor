/// <reference types="jasmine-protractor-matchers" />
import { HomePage } from '../page_objects/home.page'
import {browser, by, By, element} from "protractor";
import {ProjectCreateModal} from "../page_objects/project-create-modal.page";

describe('Verifying project generation ', function () {

     it('test', async function () {
        await new HomePage()
            .clickOnCreateButton()
            .typeProjectName('test2856')
            .clickOnSaveButton();

        await browser.sleep(10000);

            //I want to do casting my custom locator 'data-test-id' to By | ProtractorBy in the closest time
            //.click(element(by['data-test-id']('create-project-button')));

    })

});