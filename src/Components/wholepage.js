import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.decrement}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.props.increment}>+</button>
            </div>
        )
    }
}

var matchStatestoProps = (state)=>{
    return {count:state.count}
}

var matchDispatchtoProps = dispatch =>{
    return{increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })}
}

export default connect(matchStatestoProps,matchDispatchtoProps)(Counter);