import Calculator from "../src/calculator";
describe("Calculator", ()=>{
    const calculatorInstance = new Calculator();
    test("Should plus 5, -8", ()=>{
    //setup precondition
    const number1= 5
    const number2= -8
    //function under test 
    const plusResult = calculatorInstance.plus(number1,number2)
    // Validation pos condition
    expect(plusResult).toBe(-3);
    })
})