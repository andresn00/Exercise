import { CoincidedSchedule, DaySchedule, EmployeeSchedule, TimeFrame } from "../model/schedule.model";
import { toHours, toMilliseconds, toMillisecondsFromStr } from "./time.util.js";

export const compareEmployeesSchedule = (employeesSchedule: EmployeeSchedule[]) => {
    const coincidedScheduleArr: CoincidedSchedule[] = []
    employeesSchedule.forEach((empScheduleA, index) => {
        const employeesScheduleToCompare = employeesSchedule.slice(index + 1)
        employeesScheduleToCompare.forEach(empScheduleB => {
            const {totalCoincidedTimes: coincidedTimes, totalCoincidedHours: coincidedHours} = compareSchedules(empScheduleA.schedule, empScheduleB.schedule)
            const coincidedSchedule: CoincidedSchedule = {
                employeeA: empScheduleA.employee,
                employeeB: empScheduleB.employee,
                coincidedTimes,
                coincidedHours
            }
            console.log('coincidedSchedule', coincidedSchedule)
            coincidedScheduleArr.push(coincidedSchedule)
        })
    })
    return coincidedScheduleArr
}

const compareSchedules = (scheduleA: DaySchedule[], scheduleB: DaySchedule[]) => {
    let totalCoincidedHours = 0
    let totalCoincidedTimes = 0
    scheduleA.forEach(dayScheduleA => {
        const dayScheduleB = scheduleB.find(d => dayScheduleA.dayCode === d.dayCode)
        if (dayScheduleB) {
            const coincidedHours = findCoincidedHours(dayScheduleA.timeFrame, dayScheduleB.timeFrame)
            totalCoincidedHours += coincidedHours
            totalCoincidedTimes += +(coincidedHours > 0)
        }
    })
    return {totalCoincidedTimes, totalCoincidedHours}
}

const findCoincidedHours = (timeFrameA: TimeFrame, timeFrameB: TimeFrame) => {
    const startA = toMillisecondsFromStr(timeFrameA.startTime)
    const endA = toMillisecondsFromStr(timeFrameA.endTime)
    const startB = toMillisecondsFromStr(timeFrameB.startTime)
    const endB = toMillisecondsFromStr(timeFrameB.endTime)

    if (startB > endA || startA > endB) return 0
    const maxStart = Math.max(startA, startB)
    const minEnd = Math.min(endA, endB)
    return toHours(minEnd - maxStart)
}