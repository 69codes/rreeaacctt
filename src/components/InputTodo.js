import React from "react"

import { FaPlusCircle } from "react-icons/fa"

class InputTodo extends React.Component{
    state = {
        title: ""
    };
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text" placeholder="Add Todo..." 
                value={this.state.title} 
                className="input-text"
                onChange={this.onChange}
                name="title"
                />
                <button className="input-submit"><FaPlusCircle /></button>
                
            </form>
        )
    }
}
export default InputTodo