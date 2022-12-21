import { describe, expect, expectTypeOf, test } from "vitest";
import { defaultInputDataPath } from "../constants";
import { EmployeeSchedule } from "../src/model/schedule.model";
import { compareEmployeesSchedule, getEmployeesScheduleData } from "../src/util/employee-schedule.util";

describe('Should get Employees Schedules data from input file', () => {
    test('Should return an array of EmployeeSchedule', async () => {
        const filePath = defaultInputDataPath
        expectTypeOf(await getEmployeesScheduleData(filePath)).toEqualTypeOf<EmployeeSchedule[]>()
    })
})

describe('Should compare schedules between employees', () => {
    const employeesScheduleMock: EmployeeSchedule[] = [
        {
            employee: { name: 'ANDRES' },
            schedule: [
                {
                    dayCode: 'MO',
                    timeFrame: {
                        startTime: '08:00',
                        endTime: '12:00'
                    }
                },
                {
                    dayCode: 'TU',
                    timeFrame: {
                        startTime: '08:00',
                        endTime: '12:00'
                    }
                }
            ]
        },
        {
            employee: { name: 'ASTRID' },
            schedule: [
                {
                    dayCode: 'MO',
                    timeFrame: {
                        startTime: '10:00',
                        endTime: '14:00'
                    }
                }
            ]
        }
    ]
    test('Should determine coincided times between first two employees', () => {
        const expectedCoincidedTimes = 1
        expect(compareEmployeesSchedule(employeesScheduleMock)[0].coincidedTimes).toBe(expectedCoincidedTimes)
    })
    test('Should determine coincided hours between first two employees', () => {
        const expectedCoincidedHours = 2
        expect(compareEmployeesSchedule(employeesScheduleMock)[0].coincidedHours).toBe(expectedCoincidedHours)
    })
})