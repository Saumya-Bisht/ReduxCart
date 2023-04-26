import { useState ,useRef} from "react";
function Timer(props){
    const [timer,setTimer]= useState(0)
    let timerId=useRef(0)
    const startTimer=()=>{
        timerId.current=setInterval(()=>{
            setTimer((prevTimer)=>prevTimer+1)
        },1000)
    }
    const stopTimer=()=>{
        clearInterval(timerId.current)
    }
 return (
    <div>
        <h2>Timer : {timer}</h2>
        <button onClick={startTimer}>Start</button> &nbsp;&nbsp;&nbsp;
        <button onClick={stopTimer}>Stop</button>
    </div>
 )
}
export default Timer