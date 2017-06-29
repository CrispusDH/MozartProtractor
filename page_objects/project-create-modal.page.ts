import {BasePage} from "../helpers/wrappers/base.page";
import {ProjectCreateModalInterface} from "./interfaces/project-create-modal.interface";
import {by, ProtractorBy} from "protractor";

export class ProjectCreateModal extends BasePage implements ProjectCreateModalInterface{

    private readonly projectNameInput: ProtractorBy = by.dataTestId('project-name-input');
    private readonly projectTypeValue: ProtractorBy = by.dataTestId('project-type-value');
    private readonly targetEnvironmentValue: ProtractorBy = by.dataTestId('target-environment-value');
    private readonly createProjectCancelButton: ProtractorBy = by.dataTestId('create-project-cancel-button');
    private readonly createProjectSaveButton: ProtractorBy = by.dataTestId('create-project-save-button');

    private async clickOnSaveButton(): Promise<void> {
        await this.click(this.createProjectSaveButton);
    }

    private async clickOnCancelButton(): Promise<void> {
        await this.click(this.createProjectCancelButton);
    }

    private async typeProjectName(name: string): Promise<void> {
        await this.type(name, this.projectNameInput);
    }

    async createNewProject(name: string): Promise<void> {
        await this.typeProjectName(name);
        await this.clickOnSaveButton();
    }

}