describe('win', () => {
    it('create', async () => {
    
        await browser.url('https://www.google.com/')
        let newwin= await browser.createWindow("window")
        await browser.switchToWindow(newwin.handle)
        await browser.pause(5000)
        await browser.url('https://webdriver.io/')
        await browser.pause(5000)
        
    });
    
});