import { HomePage } from '../page_objects/home.page'
import {By} from "selenium-webdriver";

// Unfortunatelly had to loose types here. 
// Extending jasmine matchers does not work well - 
// https://medium.com/@cwmrowe/making-jasmine-and-typescript-play-nicely-c2f4bef1830a
declare let expect:any

describe('Verifying project generation ', function () {
    const createButton = By.css("#projects-create-configuration");

    it('test', async function () {
        await new HomePage()
                .openHomePage()
                .click(createButton);

            //I want to do casting my custom locator 'data-test-id' to By | ProtractorBy in the closest time
            //.click(element(by['data-test-id']('create-project-button')));

    })

})