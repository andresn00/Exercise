import * as fs from 'fs'
import * as readline from 'readline'


export const readDataFromFile = (filePath: string, callBackFn: any) => {
    const lineReader = readline.createInterface({
        input: fs.createReadStream(filePath)
    });
    lineReader.on('line', callBackFn)
}
