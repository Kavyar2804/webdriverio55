class Loginpage
{
    get usernametf()
    {
        return $('#username')
    }
    get passwordtf()
    {
        return $('#pwd')
    }
    get submitbtn()
    {
        return $('#sbtbtn')
    }

    async loginaction(username, pwd)
    {
        await this.usernametf.setValue(username)
        await this.passwordtf.setValue(pwd)
        await this.submitbtn.click()
    }

}

export default new Loginpage()