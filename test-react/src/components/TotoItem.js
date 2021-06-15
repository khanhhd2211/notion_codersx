import React, { Component } from 'react'

class Todo extends Component {
    constructor() {
        super()
        this.state = {
            TodoItems: [] 
        }
        // this.addItem = this.addItem.bind(this)
    }
    
    addItem() {
        let TodoItems = this.state.TodoItems
        if (TodoItems) {
            TodoItems.push("Item")
        }
        this.setState({
            TodoItems: TodoItems
        })
    }

    render() {
        let  TodoItems = this.state.TodoItems
        return(
            <div className="Todo">
                <button onClick={() => this.addItem.bind(this)()}>Add</button>
                {
                    TodoItems.length > 0 && TodoItems.map((item, index) => {
                        return <div key={index}>{item}</div>
                    })
                }
                {
                    TodoItems.length === 0 && "Nothing here ..." 
                }
            </div>
        );
    }
}

export default Todo;