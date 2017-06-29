import {By} from "selenium-webdriver";
import {ProjectPage} from "../project.page";
import {HomePage} from "../home.page";

export interface ProjectCreateModalInterface{
    createNewProject(name: string): Promise<void>
}