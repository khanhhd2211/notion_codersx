import React, { Component } from 'react'

class Todo extends Component {
    constructor() {
        super()
        this.TodoItems = [ 
            // { value: "Todo items 1", foo: true }, 
            // { value: "Todo items 2", foo: true },
            // { value: "Todo items 3", foo: false }
        ];
    }

    render() {
        return(
            <div className="Todo">
                {
                    this.TodoItems.length > 0 && this.TodoItems.map((item, index) => {
                        return <div key={index}>{item.value}</div>
                    })
                }
                {
                    this.TodoItems.length === 0 && "Nothing here ..." 
                }
            </div>
        );
    }
}

export default Todo;