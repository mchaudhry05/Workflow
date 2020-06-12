import React, {useState, Component} from 'react';
import Header from './header.js';
import Todo from './todo.js'; 
import Doing from './doing.js'; 
import Done from './done.js'; 
import '../App.css';

class App extends Component{
 // const [todos, setTodos] = useState([
   state = {
     todos: [
    {
      content: 'Pickup dry cleaning', 
      id: 0,
      isTodo: false,
      isDoing: true,
      isCompleted: false, 
    }, 
    {
      content: 'Get haircut',
      id: 1, 
      isTodo: true, 
      isDoing: false, 
      isCompleted: false,

    }, 
    {
      content: 'Start working', 
      id: 2, 
      isTodo: false, 
      isDoing: false,
      isCompleted: true
    }
  ]}

  //Remove From List 
  removeTodo = (name, id)=>{
    console.log("hello")
    var array = [... this.state.todos]; 
    var index = array.findIndex(todo => todo.content === name)
    console.log(index)
    if (index !== -1){
      array.splice(index, 1); 
      this.setState({todos: array})
    }
  }
  //Move Left 
  moveToLeft = (name, id) =>{
    var array = [... this.state.todos]; 
    var index = array.findIndex(todo => todo.content === name);
    var chosenElement = this.state.todos[index];
    if (chosenElement.isCompleted) {
      chosenElement.isCompleted = false 
      chosenElement.isDoing = true
      this.setState({todos:array})
      return
    }
    if (chosenElement.isDoing) {
      chosenElement.isDoing= false 
      chosenElement.isTodo = true
      this.setState({todos:array})
      return
    }
    
    console.log(chosenElement)
  }
  //Move Right
  moveToRight = (name, id) =>{
    var array = [... this.state.todos]; 
    var index = array.findIndex(todo => todo.content === name);
    var chosenElement = this.state.todos[index];
    if (chosenElement.isTodo) {
      chosenElement.isTodo = false 
      chosenElement.isDoing = true
      this.setState({todos:array})
      return
    }
    if (chosenElement.isDoing) {
      chosenElement.isDoing= false 
      chosenElement.isCompleted = true
      this.setState({todos:array})
      return
    }
    
    console.log(chosenElement)
  }

render(){
  return (
    <div className="App">
     <Header/>
     <div className="container">
        <Todo item ={this.state.todos} delete ={this.removeTodo} right={this.moveToRight}/>
        <Doing item ={this.state.todos} left ={this.moveToLeft} right={this.moveToRight}/>
        <Done item ={this.state.todos} left ={this.moveToLeft}/>
     </div>
    </div>
  );
}
}

export default App;
