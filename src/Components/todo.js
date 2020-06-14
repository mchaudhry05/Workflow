import React, {Component} from 'react'; 
import firebase from "firebase/app";
import "firebase/firestore";

export const firestore = firebase.firestore();
class Todo extends Component{
    
    state = {
        todos: this.props.user.todos, 
        cleaned: [],
        user: firestore.doc(`users/${this.props.user.uid}`), 
        userName: this.props.user.displayName
    }
  

  //Add Item to List: 
  addTask = (e) =>{
    e.preventDefault();
    var array = [... this.state.todos];
    console.log("workin")
    const name = this.inputEl.value 
    var jsonObj = {
      content: name,
      id: array.length+1, 
      isTodo: true, 
      isDoing: false, 
      isCompleted: false,
    }
    this.inputEl.value = ""
    array.push(jsonObj)
    this.state.todos.push(jsonObj)
    console.log(array)
    this.setState({todos: this.state.todos})

    this.state.user.set({
        todos: this.state.todos
    })

  }

  //Remove Item from List

  deleteTask = (name, id)=>{
    
    var array = [... this.state.todos]; 
    var index = array.findIndex(todo => todo.content === name)
    console.log(index)
    if (index !== -1){
      this.state.todos.splice(index, 1); 
    }

    this.setState({todos: this.state.todos})
      this.state.user.set({
        todos: this.state.todos
    })
  }

  //Move Left 
  moveToLeft = (name, id) =>{
    var array = [... this.state.todos]; 
    var index = this.state.todos.findIndex(todo => todo.content === name);
    var chosenElement = this.state.todos[index];
    if (chosenElement.isCompleted) {
      chosenElement.isCompleted = false 
      chosenElement.isDoing = true
      this.setState({todos:this.state.todos})
      this.state.user.set({
        todos: this.state.todos
    })

      return
    }
    if (chosenElement.isDoing) {
      chosenElement.isDoing= false 
      chosenElement.isTodo = true
      this.setState({todos:this.state.todos})
      this.state.user.set({
        todos: this.state.todos
    })
      return
    }
    
    console.log(chosenElement)
  }
  //Move Right
  moveToRight = (name, id) =>{
    var array = [... this.state.todos]; 
    var index = this.state.todos.findIndex(todo => todo.content === name);
    var chosenElement = this.state.todos[index];
    if (chosenElement.isTodo) {
      chosenElement.isTodo = false 
      chosenElement.isDoing = true
      this.setState({todos: this.state.todos})
      this.state.user.set({
        todos: this.state.todos
    })
      return
    }
    if (chosenElement.isDoing) {
      chosenElement.isDoing= false 
      chosenElement.isCompleted = true
      this.setState({todos:this.state.todos})
      this.state.user.set({
        todos: this.state.todos
    })
      return
    }
    
    console.log(chosenElement)
  }

  

    render(){
      console.log(this.state.userName)
        return(

            <div className="container">
                <div className="todo">
                <h1 className="type">TODO</h1>
                <div className="container-todo">
                <div className="task-container-todo"> 
                <div className="task-container-todo"> 
                <div className="add">
                    
                    <form className="add" onSubmit={e => this.addTask(e)} >
                        <input className="form" type="text" ref={ el => this.inputEl = el } required/>
                        <input className="form-button" type="submit"/>
                    </form>
                </div>            
                    {
                        this.state.todos.filter(todo => todo.isTodo).map(filteredTodo => (
                            <div className="task">
                              <button onClick={e => this.deleteTask(filteredTodo.content, e.id)} className="button-trash"></button>
                            <h1 className="task-list">{filteredTodo.content}</h1>
                            <button onClick={e => this.moveToRight(filteredTodo.content, e.id)} className="button-right"></button>
                            </div>
                        ))
                       
                    }
                    
                </div>
                </div>
                </div>
                
            </div>

            <div className="doing">
                <h1 className="type">WORKING ON</h1>
                <div className="container-doing">
                <div className="task-container-doing">      
                    {
                        this.state.todos.filter(todo => todo.isDoing).map(filteredTodo => (
                            <div className="task">
                              <button onClick={e => this.moveToLeft(filteredTodo.content, e.id)} className="button-left"></button>
                            <h1 className="task-list">{filteredTodo.content}</h1>
                            <button onClick={e => this.moveToRight(filteredTodo.content, e.id)} className="button-right"></button>
                            </div>
                        ))
                       
                    }
                    
                </div>
                </div> 
                
            </div>
            <div className="done">
                <h1 className="type">DONE</h1>
                <div className="container-done">
                <div className="task-container-done">    
                    {
                       this.state.todos.filter(todo => todo.isCompleted).map(filteredTodo => (
                            <div className="task">
                              <button onClick={e => this.moveToLeft(filteredTodo.content, e.id)} className="button-left"></button>
                            <h1 className="task-list">{filteredTodo.content}</h1>
                            <button onClick={e => this.deleteTask(filteredTodo.content, e.id)} className="button-trash"></button>
                            </div>
                        ))
                       
                    }
                    
                </div>
                </div>
            

                
            </div>
            </div>
        
       
          
        ); 

    }
}

export default Todo;