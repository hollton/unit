import { timeFormat } from "../src/index"

describe("index单元测试",()=>{
    it("测试时间格式化",()=>{
        expect(timeFormat(56)).toBe('56秒')
        // 没写xx分钟xx秒范围内的单元测试，所以src覆盖率没达到100%
        expect(timeFormat(4206)).toBe('1小时10分钟6秒')
    })
})