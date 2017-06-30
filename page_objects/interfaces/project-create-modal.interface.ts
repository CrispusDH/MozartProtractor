import {ModalFooterFragment} from "../page_fragments/modal.fragments/modal-footer.fragment";
import {ModalBodyFragment} from "../page_fragments/modal.fragments/modal-body.fragment";

export interface ProjectCreateModalInterface{
    createNewProject(name: string): Promise<void>
}