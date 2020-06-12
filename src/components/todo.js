import React, {Component} from 'react'; 

class Todo extends Component{
    getTask = (e) =>{
        this.props.add(e, this.inputEl.value)
        this.inputEl.value = ' '
    }
    render(){
        return(

            
            <div className="todo">
                <h1 className="type">TODO</h1>
                <div className="container-todo">
                <div className="task-container-todo"> 
                <div className="add">
                    <form className="add" onSubmit={e => this.getTask(e)}>
                        <input className ="form"type="text" ref={ el => this.inputEl = el } required/>
                        <input className = "formButton"type="submit"/>
                    </form>
                </div>            
                    {
                        this.props.item.filter(todo => todo.isTodo).map(filteredTodo => (
                        <div className="task">
                            <button onClick={e => this.props.delete(filteredTodo.content, e.id)} className="button-trash"id={filteredTodo.id}></button>
                            <h4 className="task-list">{filteredTodo.content}</h4>
                            <button onClick={e => this.props.right(filteredTodo.content, e.id)}className="button-right"id={filteredTodo.id}></button>
                            
                        </div>
                        ))
                    }
                </div>
            </div>
            </div>
        
       
          
        ); 

    }
}

export default Todo;