import excel from "exceljs"

describe('fetchdata', () => {

    it('fetchdata from excel', async() => {

        const book = new excel.Workbook()
        await book.xlsx.readFile('./test/testdata/data.xlsx')
        const sheet = book.getWorksheet('Sheet1')
        const data = sheet.getRow(1).getCell(1).toString()
        console.log(`$$$$$$$$$$$$$$ ${data}`);
 
    });
    
});