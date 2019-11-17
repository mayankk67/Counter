import React from 'react';
import {connect} from 'react-redux';
import './wholepage.css';

class Counter extends React.Component{
    render(){
        return(
            <div>
                <div className="text-center bak">
                    <h1>WELCOME TO MY COUNTER!!!!</h1>
                </div>
                <br/><br/>
                <div className="text-center">
                <button type="button" className="btn col-sm-3 btn-outline-primary" onClick={this.props.decrement}>Decrement(-)</button>
                <span className="col-sm-5">{this.props.count}</span>
                <button type="button" className="btn col-sm-3 btn-outline-primary" onClick={this.props.increment}>Increment(+)</button>
                </div>
                <br/><br/>
                <div className="text-center">
                    <button type="button" className="btn col-sm-3 btn-outline-danger" onClick={this.props.reset}>RESET</button>
                </div>
            </div>
        )
    }
}

var matchStatestoProps = (state)=>{
    return {count:state.count}
}

var matchDispatchtoProps = dispatch =>{
    return{increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: ()=> dispatch({type:'RESET'})}
}

export default connect(matchStatestoProps,matchDispatchtoProps)(Counter);