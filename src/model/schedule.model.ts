import { Employee } from "./employee.model"

export interface EmployeeSchedule {
    employee: Employee
    schedule: DaySchedule[]
}

export interface DaySchedule {
    dayCode: string
    timeFrame: TimeFrame
}

export interface TimeFrame {
    startTime: string
    endTime: string
}

export interface CoincidedSchedule {
    employeeA: Employee
    employeeB: Employee
    coincidedTimes: number
    coincidedHours: number
}
