import {browser, $, by, ProtractorBy} from 'protractor'
import { BasePage } from '../helpers/wrappers/base.page'
import {ProjectCreateModal} from "./project-create-modal.page";
import {HomeInterface} from "./interfaces/home.interface";


export class HomePage extends BasePage implements HomeInterface{

    private readonly createButton: ProtractorBy = by.dataTestId("create-project-button");

    clickOnCreateButton(): any {
        async () => this.click(this.createButton)
            .then(() => {
                return new ProjectCreateModal();

            })

    }

}