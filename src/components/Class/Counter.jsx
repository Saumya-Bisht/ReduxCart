import { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    inc=()=>{
        return this.setState({count:this.state.count+1})
    }
     dec=()=>{
        return this.setState({count:this.state.count-1})
    }
     res=()=>{
        return this.setState({count:0})
    }
    render(){
        
       
        return <div>
                <h1>Counter App</h1>
                <div style={{boxShadow:" 0px 0px 10px 1px black",width:"30%",margin:"100px auto"}}>
                    <h2>Count is: <span style={{color:"blue"}}>{this.state.count}</span></h2>
                    <button onClick={this.inc}>+ Count</button> &nbsp;&nbsp;&nbsp;
                    <button onClick={this.dec}>- Count</button>&nbsp;&nbsp;&nbsp;
                    <button onClick={this.res}>Reset</button>
                </div>
        </div>
    }

}
export default Counter