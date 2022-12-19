import { test, expect, describe, expectTypeOf } from "vitest";
import { formatEmployeeScheduleLine, getEmployeesScheduleData } from "../src/util/file-read.util";
import { EmployeeSchedule } from "../src/model/schedule.model";

describe('Should format given line correctly', () => {
    test('Line formatted should be of type EmployeeScheduleRow', () => {
        const mockStr = 'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00'
        expectTypeOf(formatEmployeeScheduleLine(mockStr)).toEqualTypeOf<EmployeeSchedule>()
    })
})