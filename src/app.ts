import { environment } from '../environment.js'
import { DataRow, DayWorked } from './model/input-data.model.js'
import { readDataFromFile } from './util/file-read.util.js'

const main = () => {
    const employeesScheduleData = getEmployeesScheduleData()
    // TODO Compare hours
    // TODO output result
    return 1
}

const getEmployeesScheduleData = (): DataRow[] => {
    const data: DataRow[] = []
    readDataFromFile(environment.inputDataPath, (line: string) => {
        const lineFormatted = formatLine(line)
        data.push(lineFormatted)
    })
    return data
}

const formatLine = (line: string): DataRow => {
    const [employeeName, daysWorkedStr] = line.split('=')
    const daysWorked = daysWorkedStr.split(',').map(day => {
        const dayCode = day.slice(0,2)
        const [startTime, endTime] = day.slice(2).split('-')
        const dayFormatted: DayWorked = {
            dayCode,
            startTime,
            endTime
        }
        return dayFormatted
    })
    return {
        employeeName,
        daysWorked
    }
}

main()
