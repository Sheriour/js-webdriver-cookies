import BasePage from '@root/pages/BasePage.js'

export default class MainPage extends BasePage{

    commentsTextCss: string = '#commentsText1';
    bigCookieButtonCss: string = '#bigCookie';
    cookieCounterCss: string = '#cookies';

    async waitForPageToLoad(){
        await this.waitForCommentTextToMatch("You feel like making cookies");
    }

    async waitForCommentTextToMatch(text: string){
        return await this.waitForTextInObjectLocatedByCssToInclude(this.commentsTextCss, text);
    }

    async clickBigCookie(){
        await this.clickByCss(this.bigCookieButtonCss);
    }

    async waitForCookieCountToMatch(cookiesCount: number){
        let fullString = cookiesCount + " cookies";
        await this.waitForTextInObjectLocatedByCssToInclude(this.cookieCounterCss, fullString);
    }
}