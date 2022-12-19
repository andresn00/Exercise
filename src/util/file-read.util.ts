import * as fs from 'fs'
import * as readline from 'readline'
import { environment } from '../../environment.js';
import { DaySchedule, EmployeeSchedule } from '../model/schedule.model';


export const readFileData = async (filePath: string, formatterFn: (line: string) => any) => {
    const lineReader = readline.createInterface({
        input: fs.createReadStream(filePath)
    });

    type FormatterFnReturnType = ReturnType<typeof formatterFn>
    const dataFormatted: FormatterFnReturnType[] = []
    for await (const line of lineReader) {
        const lineFormatted = formatterFn(line)
        dataFormatted.push(lineFormatted)
    }

    return dataFormatted
}

export const getEmployeesScheduleData = (): Promise<EmployeeSchedule[]> => {
    return readFileData(environment.inputDataPath, formatEmployeeScheduleLine)
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
