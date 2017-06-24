import {by} from "protractor";

export function addCustomLocatorDataTestId() {
    by.addLocator('dataId',
        function (testId: string, parentElement: HTMLElement | null | Document) {
            parentElement = parentElement || document;
            let nodes = parentElement.querySelectorAll('[data-test-id]');
            return Array.prototype.filter.call(nodes, function(node) {
                return (node.getAttribute('data-test-id') === testId);
            });
        })
}
