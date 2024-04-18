import { expect } from "chai";


describe('Suite name smoke',  () => {

    it('Script name',async  () => {

       await browser.url('https://www.google.com/')
       await browser.pause(3000)
       await browser.$('#APjFqb').setValue('Javascript')
       await browser.pause(3000)
      let tit  =await browser.getTitle()
       expect(tit).to.include('Joo')
   
       //await expect(browser).toHaveTitle('Google')
        
    });

    it('Script name1',async  () => {

        await browser.url('https://webdriver.io/')
        await browser.pause(3000)
      
         
     });

   
});