import React, {Component} from 'react'

class Done extends Component{
    render(){
        return(
            <div className="done">
                <h1 className="type">DONE</h1>
                <div className="container-done">
                <div className="task-container-done">
                    {
                        this.props.item.filter(todo => todo.isCompleted).map(filteredTodo => (
                        <div className="task">
                            <button onClick={e => this.props.left(filteredTodo.content, e.id)} className="button-left"id={filteredTodo.id}></button>
                            <h4 className="task-list">{filteredTodo.content}</h4>
                            <div></div>
                        </div>
                        ))
                    }
                </div>
            </div>
            </div>
            
        ); 
    }
}

export default Done;