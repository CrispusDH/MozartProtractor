/// <reference types="jasmine-protractor-matchers" />
import { HomePage } from '../page_objects/home.page'
import {ProjectCreateModal} from "../page_objects/project-create-modal.page";
import {browser} from "protractor";

describe('Verifying project generation ', function () {

     it('test', async function () {
         const homePage = new HomePage();
         await homePage.clickOnCreateButton();
         const projectCreateModal = new ProjectCreateModal();
         await projectCreateModal.createNewProject('test301');
         await browser.sleep(5000);
    })

});