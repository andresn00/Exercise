import { compareEmployeesSchedule } from './util/compare-schedule.util.js'
import { getEmployeesScheduleData } from './util/file-read.util.js'

const main = () => {
    getEmployeesScheduleData().then(employeesSchedule => {
        const coincidedSchedules = compareEmployeesSchedule(employeesSchedule)
        // TODO output result
        
    })
    return 1
}

main()
