import React, { Component } from 'react'

export default class Container extends Component {
    render() {
        return (
            <div class="container p-4">
                {this.props.children}
            </div>
        )
    }
}
