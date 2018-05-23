import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = { textValue: '' }
        this.textValueHandler = this.textValueHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    textValueHandler(e) {
        let text = e.target.value
        this.setState({
            textValue: text
        })
    }
    submitHandler(e) {
        e.preventDefault()
        let item = this.state.textValue
        this.props.onSubmit(item)
        this.setState({
            textValue: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.submitHandler} name="InputForm">
                <input type="text" placeholder="Add item" onChange={this.textValueHandler} value={this.state.textValue} name="InputField" />
            </form>
        )
    }
}

export default Input
