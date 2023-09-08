import ConsentCookiesPage from '@root/pages/ConsentCookiesPage.js'
import LanguageSelectPage from '@root/pages/LanguageSelectPage.js';
import MainPage from '@root/pages/MainPage.js';
import DriverManager from '@root/system/DriverManager.js'
import * as assert from 'assert';
import { Driver } from "selenium-webdriver/chrome"


let driver: Driver;

describe('Cookie Clicker Tests', function () {

  beforeEach(async function () {
    driver  = DriverManager();

    await driver.get("https://orteil.dashnet.org/cookieclicker/")

    const consentCookiePage = new ConsentCookiesPage(driver)
    await consentCookiePage.clickConsentCookies();
  });

  //Tests
  it('Should let me select a language', async function () {
    const languageSelectPage = new LanguageSelectPage(driver);
    await languageSelectPage.hoverOverGermanLanguage();

    let languageHeader = await languageSelectPage.getLanguageHeader();
    assert.equal(languageHeader, "Sprache");
    let languageSelected = await languageSelectPage.getLanguageName();
    assert.equal(languageSelected, "Deutsch");
    await languageSelectPage.selectGermanLanguage();
   
    let expectedText = "Du hast Lust, Kekse zu backen. Aber niemand will deine Kekse essen.";
    const mainPage = new MainPage(driver);
    assert.equal(await mainPage.waitForCommentTextToMatch(expectedText), true);
  });

  it('Should let click on the cookie to generate more cookies', async function () {
    const languageSelectPage = new LanguageSelectPage(driver);
    await languageSelectPage.selectEnglishLanguage();

    const mainPage = new MainPage(driver);
    await mainPage.waitForPageToLoad();
    await mainPage.clickBigCookie();
    await mainPage.clickBigCookie();
    await mainPage.waitForCookieCountToMatch(2);
    await mainPage.clickBigCookie();
    await mainPage.waitForCookieCountToMatch(3);
    await mainPage.clickBigCookie();
    await mainPage.clickBigCookie();
    await mainPage.waitForCookieCountToMatch(5);
  });

  afterEach(async function () {
    await driver.quit();
  });
});