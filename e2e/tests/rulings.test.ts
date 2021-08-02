import { NightwatchBrowser } from 'nightwatch';

import { TestConstants as constants } from '../constants';

const beforeEach: (b: NightwatchBrowser) => void = (browser: NightwatchBrowser) => {
  browser.url(constants.appBaseUrl);
};

const selectTest = {
  description: 'Should view type selector exist',
  handler: (browser: NightwatchBrowser) => {
    browser
      .waitForElementVisible('.select')
      .assert.elementPresent('.select__control')
      .assert.elementPresent('.select__items');
  }
};

const selectOpenTest = {
  description: 'Should open view type selector',
  handler: (browser: NightwatchBrowser) => {
    browser.waitForElementVisible('.select').click('.select__control').assert.elementPresent('.select--open');
  }
};

const listViewTest = {
  description: 'Should show list view type when selected',
  handler: (browser: NightwatchBrowser) => {
    browser
      .waitForElementVisible('.select')
      .click('.select__control')
      .click('.select__item:nth-of-type(1)')
      .assert.elementPresent('.rulings__items-container--list');
  }
};

const gridViewTest = {
  description: 'Should show grid view type when selected',
  handler: (browser: NightwatchBrowser) => {
    browser
      .waitForElementVisible('.select')
      .click('.select__control')
      .click('.select__item:nth-of-type(2)')
      .assert.elementPresent('.rulings__items-container--grid');
  }
};

export default {
  beforeEach,
  [selectTest.description]: selectTest.handler,
  [selectOpenTest.description]: selectOpenTest.handler,
  [listViewTest.description]: listViewTest.handler,
  [gridViewTest.description]: gridViewTest.handler
};
