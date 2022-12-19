import { getEmployeesScheduleData } from './util/file-read.util.js'

const main = () => {
    getEmployeesScheduleData().then(employeesSchedule => {
        console.log('employeesSchedule', employeesSchedule)
        // TODO Compare hours
        
        // TODO output result
    })
    return 1
}

main()
