import {by} from "protractor";

export function addCustomLocatorDataTestId() {
    by.addLocator('data-test-id',
        function (testId: string, parentElement) {
            parentElement = parentElement || document;
            let nodes = parentElement.querySelectorAll('[data-test-id]');
            return Array.prototype.filter.call(nodes, function(node) {
                return (node.getAttribute('data-test-id') === testId);
            });
        })
}
