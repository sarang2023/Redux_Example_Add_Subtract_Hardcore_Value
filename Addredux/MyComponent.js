import { connect } from "react-redux";
import { addNumbers, subtractNumbers } from "./Action";
import React from "react";


class MyComponent extends React.Component

{
    handleClick=()=>
    {
        const{addNumbers}=this.props;
        addNumbers(25, 3);
    }
    handleSubtractClick=()=>
    {
        const{subtractNumbers}=this.props;
        subtractNumbers(36,21)
    }
    render()
    {
        const { result } = this.props;
        return (
            <div>
              <button onClick={this.handleClick}>Add Numbers</button><br/><br/>
              <button onClick={this.handleSubtractClick}>Subtract Number</button>
              <p>Result: {result}</p>
            </div>)
    }
}
const mapStateToProps=state=>{
    return{
        result:state.addNumbers.result
    }
}
const mapDispatchToProps=
{
    addNumbers,
    subtractNumbers
}
export default connect(mapStateToProps,mapDispatchToProps)(MyComponent)