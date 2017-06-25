import {by} from "protractor";

export function addCustomLocatorDataTestId() {
    by.addLocator('dataTestId',
        function (dataTestId: string, parentElement: HTMLElement | null) {
            let using = parentElement || document;
            let nodes = using.querySelectorAll('[data-test-id]');
            return Array.prototype.filter.call(nodes, function(node) {
                return (node.getAttribute('data-test-id') === dataTestId);
            });
        })
}