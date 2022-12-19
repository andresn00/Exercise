export interface EmployeeSchedule {
    employeeName: string
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
