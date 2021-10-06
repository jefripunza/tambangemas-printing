import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="col-md-6 col-lg-4 mt-4">
                <div className="card">
                    <h5 className="card-header text-center" onClick={() => {
                        this.props.onClick();
                    }}>{this.props.nama}</h5>
                    <div className="card-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
