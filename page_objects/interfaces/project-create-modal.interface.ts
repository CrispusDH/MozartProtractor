import {By} from "selenium-webdriver";
import {ProjectPage} from "../project.page";
import {HomePage} from "../home.page";

export interface ProjectCreateModalInterface{
    clickOnSaveButton(): ProjectPage
    clickOnCancelButton(): HomePage
    typeProjectName(name: string): ProjectPage
}