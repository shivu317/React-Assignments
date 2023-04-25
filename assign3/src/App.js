import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react';
import ButtonClick from './Components/Button';


function App() {
  function shivani(){
    alert("Shivani")
document.getElementById("image").innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCTE62HwFmx9ddTmw6PL6Gvblkbm8CZm7MA&usqp=CAU"/>`
document.getElementById("designation").innerHTML="<h6>UI/UX DESiGNER</h6>"
document.getElementById("userName").innerHTML="<h1>Shivani</h1>"
document.getElementById("information").innerHTML="<p>A UI Designer — or User Interface Designer — designs all the screens through which <br/>a user will move while using a website, app, or video game, while also creating the visual design elements that make this movement possible.</p>"
  }
 function omthoke(){
    alert("Om")
    document.getElementById("image").innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZOQ8TCJKUMXXKUVUs1dM8YliiobnSH1TPQ&usqp=CAU" />`
    document.getElementById("designation").innerHTML="<h6>Computer Science Engineer</h6>"
    document.getElementById("userName").innerHTML="<h1>OmThoke</h1>"
    document.getElementById("information").innerHTML="<p>Computer engineers create and test hardware such as motherboards, routers, circuits, and other equipment. While a programmer focuses on the software side of computer systems, computer engineers specialize in the physical components of a computer.</p>"
  }
  function kajal(){
    alert("Kajal ")
    document.getElementById("image").innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThC2bcRyhlI4U9kN97z-Vkn4houYHzF0BFLg&usqp=CAU"/>`
    document.getElementById("designation").innerHTML="<h6>Staff Nurse</h6>"
    document.getElementById("userName").innerHTML="<h1>Kajal</h1>"
    document.getElementById("information").innerHTML="<p>Responsible for overall planning of nursing care of patients and for assignment of patients to nurses working in the ward. 2 Rendering direct nursing care to the ill patients & directly assisting the surgeons in major operations. 3. Ensuring that total health needs of patients are met.</p>"
  }
  
  return (
    <Fragment>
      <div className="container">
      <div className="container-2">
      <div id="image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCTE62HwFmx9ddTmw6PL6Gvblkbm8CZm7MA&usqp=CAU" /></div>
      <div id="designation"><h6>UI/UX DESIGNER</h6></div>
      <div id="userName"><h1>Aryan Shirani</h1></div>
      <div id="information"><p>A UI Designer — or User Interface Designer — designs all the screens through which <br/>a user will move while using a website, app, or video game, while also creating the visual design elements that make this movement possible.</p></div>
       <br/>
      <p>see more buttons..</p>
       
       <ButtonClick onClickFunction={shivani}  classname="firstbtn" name="Shivani"  />
       <ButtonClick onClickFunction={omthoke} classname="secondbtn" name="Om"/>
      <ButtonClick onClickFunction={kajal} classname="thirdbtn" name="Kajal"/>
      </div>
      </div>
    </Fragment>
    )
}

export default App;
