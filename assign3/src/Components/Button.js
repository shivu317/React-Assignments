import { Fragment } from 'react'
import './Button.css'
//  import './../App.css'

 
 
 
 export default function ButtonClick(props){
         
    
    
    return(
        <Fragment>
        
            <button onClick={props.onClickFunction  } className={props.classname}>{props.name}</button>
        </Fragment>
    )
}
