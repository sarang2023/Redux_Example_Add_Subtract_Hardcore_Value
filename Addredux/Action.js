import { ADD_NUMBER, SUBTRACT_NUMBER } from "./Actiontype1"

export const addNumbers=(num1,num2)=>{
    return{
        type:ADD_NUMBER,
        payload:num1+num2
    }
}
export const subtractNumbers=(num1,num2)=>
{
    return{
        type:SUBTRACT_NUMBER,
        payload:num1-num2
    }
}