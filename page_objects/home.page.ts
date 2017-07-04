import {browser, $, by, ProtractorBy} from 'protractor'
import { BasePage } from '../helpers/wrappers/base.page'
import {ProjectCreateModal} from "./project-create-modal.page";
import {HomeInterface} from "./interfaces/home.interface";


export class HomePage extends BasePage implements HomeInterface{

    private readonly createButton: ProtractorBy = by.dataTestId("create-project-button");

    async clickOnCreateButton(): Promise<void> {
         await this.click(this.createButton)
    }

}