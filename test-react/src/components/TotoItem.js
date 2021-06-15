import React, { Component } from 'react'

class Todo extends Component {
    constructor() {
        super()
        this.TodoItems = [ 
            "Todo item 1", 
            "Todo item 2", 
            "Todo item 3"
        ];
    }

    render() {
        return(
            <div className="Todo">
                {
                    this.TodoItems.map((item, index) => {
                        return <div key={index}>{item}</div>
                    })
                }
            </div>
        );
    }
}

export default Todo;