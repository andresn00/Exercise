import { defaultInputDataPath } from '../constants.js'
import { CoincidedSchedule } from './model/schedule.model.js'
import { compareEmployeesSchedule } from './util/employee-schedule.util.js'
import { getEmployeesScheduleData } from './util/employee-schedule.util.js'

const main = async () => {
    try {
        const filePath = process.argv[2] || defaultInputDataPath
        const employeesSchedule = await getEmployeesScheduleData(filePath)
        const coincidedSchedules = compareEmployeesSchedule(employeesSchedule)
        printCoincidedSchedules(coincidedSchedules)
    } catch (error) {
        console.log('Error executing application')
        console.log('Error:', (error as Error).message)
        process.exit()
    }
}

const printCoincidedSchedules = (coincidedSchedules: CoincidedSchedule[]) => {
    coincidedSchedules.forEach(coincided => {
        const output = `${coincided.employeeA.name} - ${coincided.employeeB.name}: ${coincided.coincidedTimes}`
        console.log(output)
        // Uncomment next lines to output result with coincided hours
        // const outputWithHours = `${coincided.employeeA.name} - ${coincided.employeeB.name}: ${coincided.coincidedTimes} (${coincided.coincidedHours} hours)`
        // console.log(outputWithHours)
    })
}

main()
