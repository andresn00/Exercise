import { CoincidedSchedule } from './model/schedule.model.js'
import { compareEmployeesSchedule } from './util/compare-schedule.util.js'
import { getEmployeesScheduleData } from './util/file-read.util.js'

const main = () => {
    getEmployeesScheduleData().then(employeesSchedule => {
        const coincidedSchedules = compareEmployeesSchedule(employeesSchedule)
        // TODO output result
        printCoincidedSchedules(coincidedSchedules)
    })
    return 1
}

const printCoincidedSchedules = (coincidedSchedules: CoincidedSchedule[]) => {
    coincidedSchedules.forEach(coincided => {
        const output = `${coincided.employeeA.name} - ${coincided.employeeB.name}: ${coincided.coincidedTimes} (${coincided.coincidedHours} hours)`
        console.log(output)
    })
}

main()
