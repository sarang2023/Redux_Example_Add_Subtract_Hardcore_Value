import { ADD_NUMBER, SUBTRACT_NUMBER } from "./Actiontype1"

const initialState={
    result:0
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_NUMBER:
            return{
                ...state,result:action.payload
            }
            case SUBTRACT_NUMBER:
                return{
                    ...state,result:action.payload
                };
                
            default:return state
    }
}
export default reducer;