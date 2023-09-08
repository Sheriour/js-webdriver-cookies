import BasePage from '@root/pages/BasePage.js'

export default class LanguageSelectPage extends BasePage{

    germanLanguageSelectCss: string  = "#langSelect-DE";
    englishLanguageSelectCss: string  = "#langSelect-EN";

    async hoverOverGermanLanguage(){
        await super.hoverByCss(this.germanLanguageSelectCss)
    }

    async getLanguageHeader(){
        let header = await super.getElementByCss("#languageSelectHeader"); 
        return header.getText();
    }

    async getLanguageName(){
        let name = await super.getElementByCss(this.germanLanguageSelectCss);
        return name.getText();
    }

    async selectGermanLanguage(){
        await super.clickByCss(this.germanLanguageSelectCss);
    }

    async selectEnglishLanguage(){
        await super.clickByCss(this.englishLanguageSelectCss);
    }
}