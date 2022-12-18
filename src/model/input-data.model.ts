export interface DayWorked {
    dayCode: string
    startTime: string
    endTime: string
}

export interface DataRow {
    employeeName: string
    daysWorked: DayWorked[]
}