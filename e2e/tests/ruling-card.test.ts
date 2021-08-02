import { NightwatchBrowser } from 'nightwatch';

import { TestConstants as constants } from '../constants';

const pollSelector = '.poll';
const rulingCardSelector = '.ruling-card:nth-of-type(1)';
const thumbsUpSelector = '.icon-button--positive';
const voteButtonSelector = '.default-button';

const beforeEach: (b: NightwatchBrowser) => void = (browser: NightwatchBrowser) => {
  browser.url(constants.appBaseUrl);
};

const rulingCardTest = {
  description: 'Should ruling card element exist',
  handler: (browser: NightwatchBrowser) => {
    browser
      .waitForElementVisible(rulingCardSelector)
      .assert.elementPresent('.ruling-card__figure')
      .assert.elementPresent('.ruling-card__content')
      .assert.elementPresent(pollSelector)
      .assert.elementPresent('.gauge-bar');
  }
};

const rulingCardPollTest = {
  description: 'Should active vote button when vote option selected',
  handler: (browser: NightwatchBrowser) => {
    browser
      .waitForElementVisible(rulingCardSelector)
      .assert.elementPresent(pollSelector)
      .click(`${rulingCardSelector} ${thumbsUpSelector}`)
      .assert.elementPresent(`${rulingCardSelector} .icon-button--active`);
  }
};

const rulingCardPollSubmitTest = {
  description: 'Should submit poll',
  handler: (browser: NightwatchBrowser) => {
    browser
      .waitForElementVisible(rulingCardSelector)
      .assert.elementPresent(pollSelector)
      .click(`${rulingCardSelector} ${thumbsUpSelector}`)
      .click(`${rulingCardSelector} ${voteButtonSelector}`)
      .assert.containsText(`${rulingCardSelector} ${voteButtonSelector}`, 'Vote Again')
      .assert.containsText(`${rulingCardSelector} .poll__eyebrow`, 'Thank you for your vote!');
  }
};

const rulingCardPollResetTest = {
  description: 'Should reset poll after submiting',
  handler: (browser: NightwatchBrowser) => {
    browser
      .waitForElementVisible(rulingCardSelector)
      .assert.elementPresent(pollSelector)
      .click(`${rulingCardSelector} ${thumbsUpSelector}`)
      .click(`${rulingCardSelector} ${voteButtonSelector}`)
      .click(`${rulingCardSelector} ${voteButtonSelector}`)
      .assert.containsText(`${rulingCardSelector} ${voteButtonSelector}`, 'Vote Now')
      .expect.element(`${rulingCardSelector} ${voteButtonSelector}`).not.to.be.enabled;
  }
};

export default {
  beforeEach,
  [rulingCardTest.description]: rulingCardTest.handler,
  [rulingCardPollTest.description]: rulingCardPollTest.handler,
  [rulingCardPollSubmitTest.description]: rulingCardPollSubmitTest.handler,
  [rulingCardPollResetTest.description]: rulingCardPollResetTest.handler
};
