import { Fragment } from "react"
import './CardDetails.css'

export function Cart({product}){
    const {productName,productPic,Brand,productDescription,Price,Rating,name1}=product
    console.log(productName)
    // const {name1}=addColor
    function callName(){

        return alert(`product of is ${productName},which is  of brand ${Brand} has of rupees${Price} is added in the cart`)
    }
    
    return(
        <Fragment>
        <div className="cart-container">
           
        <img src={productPic}
        height="180px"
        width="170px"
        ></img>
         <h1 style={{display:"flex",
         textAlign:"center",
         justifyContent:"center",
         color:"gray"
       }}>{productName}</h1>
        <h2 style={{display:"flex",
         fontWeight:"bold",
         fontSize:"",
         
         justifyContent:"center",
         color:"darkgrey"
       }}>{Brand}</h2>
        <p style={{display:"flex",
         fontWeight:"bold",
         
         
         justifyContent:"center",
         color:"darkgrey"
       }}>{productDescription}</p>
        <h3 style={{display:"flex",
         fontWeight:"bold",
         
         
         justifyContent:"center",
         
       }}>{Price}</h3>
        <h4 style={{display:"flex",
         fontWeight:"bold",
         
         
         justifyContent:"center",
         
       }} >{Rating}</h4>
       </div>
       
        <button className="btn" onClick={()=>callName(product)}  style={{backgroundColor:name1}}>ADD TO CART</button>  
        
        </Fragment>
    )
}