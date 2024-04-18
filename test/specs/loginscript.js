import lgPage from "../pageobjects/login1.page.js";

describe('login', () => {

    it('lgnaction smoke', async() => {
        await browser.url('')
        await lgPage.loginaction('xxxx' , 123454)
        await lgPage.passwordtf.waitForDisplayed({timeout:2000})
        await lgPage.loginaction('xxxx' , 123454)
        
    });
    
});