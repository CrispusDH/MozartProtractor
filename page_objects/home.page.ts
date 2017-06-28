import {browser, $, by, ProtractorBy} from 'protractor'
import { BasePage } from '../helpers/wrappers/base.page'
import {ProjectCreateModal} from "./project-create-modal.page";


export class HomePage extends BasePage {

    private readonly createButton: ProtractorBy = by.dataTestId("create-project-button");

    clickOnCreateButton(): ProjectCreateModal {
        this.click(this.createButton);
        return new ProjectCreateModal();
    }

}