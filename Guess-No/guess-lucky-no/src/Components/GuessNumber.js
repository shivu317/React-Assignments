import {useState} from "react"
import './GuessNumber.css'

export function GuessNumber() {

const num = Math.floor((Math.random() * 10) +1)
const[number,setNumber]=useState(1)
const[randomnum,setrandomnum] = useState(num)
const[ans,setAns]=useState('')
const[count,setCount]=useState(0)
const[count1,setCount1]=useState()

function handleEvent(){
    
    let yoursNumber=number
    
    
    else if(yoursNumber <randomnum){
        alert("you guessed a smaller number")
        setCount(count + 1)
    }

    else if(yoursNumber > randomnum){
        setCount(count + 1)
        alert("OOPs...!you guessed a bigger number")
    }
    
    else if(yoursNumber===randomnum){
        setCount(count + 1)
        setAns("Congratulations....!you guess right number in")
        setCount1(count + " attempts")
          }
    
    else {
        alert("It is not a number")
        setCount(count + 1)
    }
}


function getValue(e){
   setNumber(e.target.value)
}
return(

    <div className="container">
        <h1>Lets Play....!</h1>
        <h2>Enetr Number To Guess</h2>
        <input onChange={getValue} placeholder="Number"/>
        <button onClick={handleEvent}>Match Number </button>
        <h1> {ans} {count}</h1>
    </div>
)
}
