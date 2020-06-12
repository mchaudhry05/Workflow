import React, {Component} from 'react'; 

class Todo extends Component{
    render(){
        return(
            
            
            <div className="todo">
                <h1 className="type">Todo Here</h1>
                <div className="container-todo">
                <div className="task-container-todo">             
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