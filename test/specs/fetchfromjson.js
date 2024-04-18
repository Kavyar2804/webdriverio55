import exampleloginpage from "../pageobjects/exampleloginpage.js";
import fs from "fs"
let cred = JSON.parse(fs.readFileSync('./test/testdata/data.json'))

describe('fetchdatafromjson', () => {
    
        let usn = cred.name
        let pwd = cred.password
        console.log(usn , pwd);

        it('loginaction', async () => {

            await browser.url('https://practicetestautomation.com/practice-test-login/')
            await browser.pause(2000)
            await exampleloginpage.loginaction(usn,pwd)
            await browser.pause(2000)
        });
        
    
  
    
});