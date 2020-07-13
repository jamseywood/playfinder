import { browser, by, element, promise, ExpectedConditions } from 'protractor';

export class AppPageBase {

    public navigateTo(navElement?: string) {
        if (navElement) {
            return element(by.css(navElement)).click();
        }
        const url = (<any>this.constructor).url;
        const navPromise = browser.get(url) as Promise<any>;
        return navPromise;
    }

    getBrowserTitleText(): promise.Promise<string> {
        return browser.getTitle();
    }

    clearSession(): promise.Promise<void> {
        browser.executeScript("window.localStorage.clear();");
        return browser.executeScript("window.sessionStorage.clear();");
    }

}
