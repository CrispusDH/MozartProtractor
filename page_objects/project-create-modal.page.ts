import {BasePage} from "../helpers/wrappers/base.page";
import {ProjectCreateModalInterface} from "./interfaces/project-create-modal.interface";
import {ModalBodyFragment} from "./page_fragments/modal.fragments/modal-body.fragment";
import {ModalFooterFragment} from "./page_fragments/modal.fragments/modal-footer.fragment";

export class ProjectCreateModal extends BasePage implements ProjectCreateModalInterface{

    private modalBody: ModalBodyFragment;
    private modalFooter: ModalFooterFragment;

    constructor() {
        super();
        this.modalBody = new ModalBodyFragment();
        this.modalFooter = new ModalFooterFragment();
    }

    async createNewProject(name: string): Promise<void> {
        await this.modalBody.typeProjectName(name);
        await this.modalFooter.clickOnSaveButton();
    }

}