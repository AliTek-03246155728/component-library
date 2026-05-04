import React, { useState } from "react";
import Button  from "./components/buttons";
import Card from "./components/cards";
import Modal from "./components/modals";

function App(){
  const [open, setOpen] = useState(false);
  return (
    <div id="main-div"> 
    <Button id="blue" onClick={() => setOpen(true)}>Check the Modal</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Modal.Header>
          <h2>This is My Modal</h2>
        </Modal.Header>

        <Modal.Body>
          <p>This modal is only cobtent based means at this time you can only see the content only.</p>
        </Modal.Body>
        <Modal.Footer>
          <button id="red" onClick={() => setOpen(false)}>Close</button>
        </Modal.Footer>
      </Modal>
    <div id="app-body">
      
    <Card>
      <Card.Header><h2>Ali</h2></Card.Header>
      <Card.Body><p>He is 20 years old person and he is very hardworking student.</p></Card.Body>
      <Card.Footer><button id="green" onClick={() => {alert("you have clicked the green button")}}>Click me</button></Card.Footer>
    </Card>  
      
<Card>
      <Card.Header><h2>Ahmad</h2></Card.Header>
      <Card.Body><p>He is a healthy person and he had developed his interest in the computer field.</p></Card.Body>
      <Card.Footer><button id="green" onClick={() => {alert("you have clicked the green button")}}>Click me</button></Card.Footer>
    </Card>  


    <Card>
      <Card.Header><h2>Hamid</h2></Card.Header>
      <Card.Body><p>He is game loving person and he has many friends who have the interest in the games.</p></Card.Body>
      <Card.Footer><button id="green" onClick={() => {alert("you have clicked the green button")}}>Click me</button></Card.Footer>
    </Card>
  

    <Card>
      <Card.Header><h2>Talha</h2></Card.Header>
      <Card.Body><p>He is 19 years old person and his favourite sport is gymnastic.</p></Card.Body>
      <Card.Footer><button id="green" onClick={() => {alert("you have clicked the green button")}}>Click me</button></Card.Footer>
    </Card>

    <Card>
      <Card.Header><h2>Gulfam</h2></Card.Header>
      <Card.Body><p>He is loyal person to his work and is a nice person.</p></Card.Body>
      <Card.Footer><button id="green" onClick={() => {alert("you have clicked the green button")}}>Click me</button></Card.Footer>
    </Card>

    <Card>
      <Card.Header><h2>Naseer</h2></Card.Header>
      <Card.Body><p>He is an honest person and never try to speak lie.</p></Card.Body>
      <Card.Footer><button id="green" onClick={() => {alert("you have clicked the green button")}}>Click me</button></Card.Footer>
    </Card>
    
    <Card>
      <Card.Header><h2>Saif</h2></Card.Header>
      <Card.Body><p>He is well experienced person who always try to learn something new.</p></Card.Body>
      <Card.Footer><button id="green" onClick={() => {alert("you have clicked the green button")}}>Click me</button></Card.Footer>
    </Card>

    <Card>
      <Card.Header><h2>Shahzad</h2></Card.Header>
      <Card.Body><p>He is a regular person who says prayer regular.</p></Card.Body>
      <Card.Footer><button id="green" onClick={() => {alert("you have clicked the green button")}}>Click me</button></Card.Footer>
    </Card>
    
    <Card>
      <Card.Header><h2>Twakal</h2></Card.Header>
      <Card.Body><p>He an intellegent person who can solve the mathematical problems in few seconds.</p></Card.Body>
      <Card.Footer><button id="green" onClick={() => {alert("you have clicked the green button")}}>Click me</button></Card.Footer>
    </Card>

    <Card>
      <Card.Header><h2>Sajid</h2></Card.Header>
      <Card.Body><p>He is 23 years old person who is preparing the PPSC test to get a job.</p></Card.Body>
      <Card.Footer><button id="green" onClick={() => {alert("you have clicked the green button")}}>Click me</button></Card.Footer>
    </Card>
    
  </div>
   
    </div>
    )
}

export default App;



