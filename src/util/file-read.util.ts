import * as fs from 'fs'
import * as readline from 'readline'
import { DaySchedule, EmployeeSchedule } from '../model/schedule.model';


export const readFileData = async <T>(filePath: string, formatterFn: (line: string) => T) => {
    try {
        const lineReader = readline.createInterface({
            input: fs.createReadStream(filePath)
        });

        const dataFormatted: T[] = []
        for await (const line of lineReader) {
            const lineFormatted = formatterFn(line)
            dataFormatted.push(lineFormatted)
        }

        return dataFormatted
    } catch(error) {
        throw new Error('File not found, path: ' + filePath)
    }
}
