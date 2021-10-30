import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <>
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

                {/* <div class="col-lg-6">
                    <div class="card card-project">
                        <div class="progress">
                            <div class="progress-bar bg-danger" role="progressbar"
                                style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div class="card-body">
                            <div class="dropdown card-options">
                                <button class="btn-options" type="button"
                                    id="project-dropdown-button-1" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="material-icons">more_vert</i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right" style="">
                                    <a class="dropdown-item" href="#">Edit</a>
                                    <a class="dropdown-item" href="#">Share</a>
                                </div>
                            </div>
                            <div class="card-title">
                                <a href="#view" onClick={() => {
                                    this.props.onClick();
                                }}>
                                    <h5 data-filter-by="text" class="H5-filter-by-text">{this.props.nama}
                                    </h5>
                                </a>
                            </div>
                            <div className="card-body">
                                {this.props.children}
                            </div>
                            <div class="card-meta d-flex justify-content-between">
                                <div class="d-flex align-items-center">
                                    <i class="material-icons mr-1">playlist_add_check</i>
                                    <span class="text-small">6/10</span>
                                </div>
                                <span class="text-small SPAN-filter-by-text"
                                    data-filter-by="text">Due 4 days</span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </>
        )
    }
}
