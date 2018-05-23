import React from 'react'

class ListItems extends React.Component {
    render() {
        return (
            <ul>
                {this.props.children}
            </ul>
        )
    }
}

export default ListItems
