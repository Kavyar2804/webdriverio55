
import exampleloginpage from "../pageobjects/exampleloginpage.js";
import fs from "fs"
let cred = JSON.parse(fs.readFileSync("./test/testdata/multipledata.json"))

describe('from json', () => {

    cred.forEach(data => {
       const usn = data.name
        const pwd = data.password
        console.log(usn ,pwd);

    it('value', async() => {
        await browser.url('https://practicetestautomation.com/practice-test-login/')
        await browser.maximizeWindow()
        console.log(usn ,pwd);
        await exampleloginpage.loginaction(usn,pwd)
        await browser.pause(5000)
        
    });
});

    
});