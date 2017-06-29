/// <reference types="jasmine-protractor-matchers" />
import { HomePage } from '../page_objects/home.page'
import {browser, by, By, element} from "protractor";
import {ProjectCreateModal} from "../page_objects/project-create-modal.page";

describe('Verifying project generation ', function () {

     it('test', async function () {
         const homePage = new HomePage();
         await homePage.clickOnCreateButton();
         const projectCreateModal = new ProjectCreateModal();
         await projectCreateModal.typeProjectName('test292');
         await projectCreateModal.clickOnSaveButton();

    })

});