import  React, {Component} from 'react'; 

class Doing extends Component{
    render(){
        return(
            <div className="doing">
                <h1 className="type">WORKING ON</h1>
                <div className="container-doing">
                <div className="task-container-doing">
                    {
                        this.props.item.filter(todo => todo.isDoing).map(filteredTodo => (
                        <div className="task">
                            <button onClick={e => this.props.left(filteredTodo.content, e.id)} className="button-left"id={filteredTodo.id}></button>
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

export default Doing;