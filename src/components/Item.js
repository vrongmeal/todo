import React from 'react'

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        let index = this.props.index
        this.props.onClick(index)
    }
    render() {
        return <li key={this.props.index.toString()} onClick={this.handleClick}>{this.props.content}</li>
    }
}

export default Item
