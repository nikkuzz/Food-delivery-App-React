import { sum } from "../sum"

test("sum of 2 numbers is", () => {

    const result = sum(3,4)

    //assertion
    expect(result).toBe(7);
})