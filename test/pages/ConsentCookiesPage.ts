import BasePage from '@root/pages/BasePage.js'

export default class ConsentCookiesPage extends BasePage{

    async clickConsentCookies(){
        await super.clickByCss("button[aria-label='Consent']")
    }
}