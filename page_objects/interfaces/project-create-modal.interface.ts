import {By} from "selenium-webdriver";
import {ProjectPage} from "../project.page";
import {HomePage} from "../home.page";

export interface ProjectCreateModalInterface{
    clickOnSaveButton(): Promise<void>
    clickOnCancelButton(): Promise<void>
    typeProjectName(name: string): Promise<void>
}