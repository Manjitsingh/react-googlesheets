import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class MenuComponent extends Component {
    state = {}

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item onClick={this.handleItemClick}> Add content </Menu.Item>
            </Menu>
        )
    }
}

export default MenuComponent;