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

export const getEmployeesScheduleData = (filePath: string): Promise<EmployeeSchedule[]> => {
    return readFileData<EmployeeSchedule>(filePath, formatEmployeeScheduleLine)
}

export const formatEmployeeScheduleLine = (line: string): EmployeeSchedule => {
    const [employeeName, daysWorkedStr] = line.split('=')
    const schedule = daysWorkedStr.split(',').map(day => {
        const dayCode = day.slice(0,2)
        const [startTime, endTime] = day.slice(2).split('-')
        const dayFormatted: DaySchedule = {
            dayCode,
            timeFrame: {
                startTime,
                endTime
            }
        }
        return dayFormatted
    })
    const employee = { name: employeeName }
    return {
        employee,
        schedule
    }
}
