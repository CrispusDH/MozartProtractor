import {BasePage} from "../helpers/wrappers/base.page";
import {ProjectCreateModalInterface} from "./interfaces/project-create-modal.interface";
import {ProjectPage} from "./project.page";
import {HomePage} from "./home.page";
import {by, ProtractorBy} from "protractor";

export class ProjectCreateModal extends BasePage implements ProjectCreateModalInterface{

    private readonly projectNameInput: ProtractorBy = by.dataTestId('project-name-input');
    private readonly projectTypeValue: ProtractorBy = by.dataTestId('project-type-value');
    private readonly targetEnvironmentValue: ProtractorBy = by.dataTestId('target-environment-value');
    private readonly createProjectCancelButton: ProtractorBy = by.dataTestId('create-project-cancel-button');
    private readonly createProjectSaveButton: ProtractorBy = by.dataTestId('create-project-save-button');

    clickOnSaveButton(): ProjectPage {
        this.click(this.createProjectSaveButton);
        return new ProjectPage()
    }

    clickOnCancelButton(): HomePage {
        this.click(this.createProjectCancelButton);
        return new HomePage();
    }

    typeProjectName(name: string): ProjectCreateModal {
        this.type(name, this.projectNameInput);
        return this
    }

}