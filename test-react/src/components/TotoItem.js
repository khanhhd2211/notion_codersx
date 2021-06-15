import React, { Component } from 'react'
import classNames from 'classnames'

class Todo extends Component {
    constructor() {
        super()
        this.TodoItems = [ 
            { value: "Todo items 1", foo: true }, 
            { value: "Todo items 2", foo: true },
            { value: "Todo items 3", foo: false }
        ];
    }

    render() {
        return(
            <div className="Todo">
                {
                    this.TodoItems.map((item, index) => {
                        return <div className={classNames("todoItem", { bar: item.foo })} key={index}>{item.value}</div>
                    })
                }
            </div>
        );
    }
}

export default Todo;