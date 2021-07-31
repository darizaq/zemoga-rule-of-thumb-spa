import { NightwatchBrowser } from 'nightwatch';

import { TestConstants as constants } from '../constants';

const base: (b: NightwatchBrowser) => void = (browser: NightwatchBrowser) => {
    browser.url(constants.appBaseUrl).waitForElementVisible('body').assert.elementPresent('zmg-root');
};

export default { base };
