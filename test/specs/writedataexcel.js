import excel from "exceljs"

describe('Write data', () => {
    it('Toexcel', async() => {
        

        const book = new excel.Workbook()
        await book.xlsx.readFile('./test/testdata/data.xlsx')
        const sheet = book.addWorksheet('Sheet99')
        sheet.getRow(1).getCell(1).value='NEWvalue999'
        await book.xlsx.writeFile('./test/testdata/data.xlsx')
        
    });
    
});