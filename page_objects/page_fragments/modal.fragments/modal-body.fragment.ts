import {BasePage} from "../../../helpers/wrappers/base.page";
import {by, element, ElementFinder, ProtractorBy} from "protractor";

export class ModalBodyFragment extends BasePage {

    private readonly projectNameInputLocator: ProtractorBy = by.dataTestId('project-name-input');
    private readonly projectTypeValueLocator: ProtractorBy = by.dataTestId('project-type-value');
    private readonly targetEnvironmentValueLocator: ProtractorBy = by.dataTestId('target-environment-value');

    async typeProjectName(name: string): Promise<void> {
        await this.type(name, this.projectNameInputLocator);
    }
}