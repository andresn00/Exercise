import { test, expect, describe, expectTypeOf } from "vitest";
import { readFileData } from "../src/util/file-read.util";

describe('Should read .txt files properly', () => {
    test('Should throw error if file does not exist', () => {
        const filePath = 'wrongPath/input.txt'
        const formatterFnMock = (line: string) => line
        expect(readFileData(filePath, formatterFnMock)).rejects.toThrowError('File not found')
    })
    
    test('Should return a string[] given a formatter that returns a string', async () => {
        const filePath = 'data/input.txt'
        const formatterFnMock = (line: string) => line
        expectTypeOf(await readFileData(filePath, formatterFnMock)).toEqualTypeOf<string[]>()
    })
})