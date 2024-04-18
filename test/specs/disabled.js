describe('disabled ', () => {
    it('handle disabled element', async () => {
        await browser.url('https://demoapps.qspiders.com/ui?scenario=1')
        await browser.$("//li[.='Disabled']").click()
        let ele = await browser.$('#name')
        await ele.isEnabled()
        
    });
    
});