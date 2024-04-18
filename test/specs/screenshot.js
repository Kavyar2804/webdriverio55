describe('screenshot', () => {

        it('withdate & time', async() => {
                
        await browser.url('https://webdriver.io/');
        const now = new Date()
        const datetimestring = now.toLocaleString('en-IN')
        //const timestamp = now.toISOString().replace(/[:.]/g,'-')
        const filename = `screenshot_${datetimestring}.png`
        await browser.saveScreenshot(`./${filename}`)
        console.log(filename);
        });
        
});

   
  
