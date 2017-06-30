import {ProtractorBy, by, ElementFinder, element} from "protractor";
import {BasePage} from "../../../helpers/wrappers/base.page";

export class ModalFooterFragment extends BasePage{

    private readonly createProjectCancelButtonLocator: ProtractorBy = by.dataTestId('create-project-cancel-button');
    private readonly createProjectSaveButtonLocator: ProtractorBy = by.dataTestId('create-project-save-button');

    async clickOnSaveButton(): Promise<void> {
        await this.click(this.createProjectSaveButtonLocator);
    }

    async clickOnCancelButton(): Promise<void> {
        await this.click(this.createProjectCancelButtonLocator);
    }
}