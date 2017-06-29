import {By} from "selenium-webdriver";
import {ProjectPage} from "../project.page";
import {HomePage} from "../home.page";

export interface ProjectCreateModalInterface{
    clickOnSaveButton(): Promise<ProjectPage>
    clickOnCancelButton(): Promise<HomePage>
    typeProjectName(name: string): Promise<this>
}