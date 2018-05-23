import React from 'react'
import Input from './Input'
import ListItems from './ListItems'
import Item from './Item'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            currentIndex: 0
        }
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    addItem(textValue) {
        let newItem = {
            index: this.state.currentIndex,
            content: textValue
        }
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(newItem),
                currentIndex: this.state.currentIndex + 1
            }
        })
    }
    deleteItem(index) {
        let newList = this.state.items.filter(item => item.index !== index)
        this.setState({
            items: newList
        })
    }
    render() {
        let items = this.state.items.map(item => <Item index={item.index} content={item.content} onClick={this.deleteItem} />)
        return (
            <div>
                <h1>ToDo App</h1>
                <Input onSubmit={this.addItem} />
                <ListItems items={this.state.items}>
                    {items}
                </ListItems>
            </div>
        )
    }
}

export default App
