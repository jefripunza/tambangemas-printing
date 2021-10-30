import React, { Component } from 'react';
import Navbar from "../Navbar";

import moment from "moment";
import 'moment/locale/id';

import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

moment.lang('id');
const now_date = moment.unix(parseInt((new Date()).getTime()) / 1000).format('YYYY-MM-DD_HH-m-s_dddd');

export default class Container extends Component {
    render() {
        return (
            <div class="layout layout-nav-side">
                {/* <Navbar /> */}
                <div class="main-container">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-11 col-xl-10">
                                <div class="page-header">
                                    <h1>Tambang Emas Printing</h1>
                                    <p class="lead">project anti lupa :v</p>
                                </div>
                                <hr />
                                <div class="tab-content">
                                    <div class="tab-pane fade active show" id="projects" role="tabpanel"
                                        data-filter-list="content-list-body">
                                        <div class="content-list">
                                            <div class="row content-list-head">
                                                <div class="col-auto">
                                                    <h3>Stok Barang</h3>
                                                    {this.props.item.length === 0 ? <>
                                                        <button
                                                            class="btn btn-round"
                                                            data-toggle="modal"
                                                            data-target="#project-add-modal"
                                                            style={{ padding: 0 }}
                                                            onClick={() => {
                                                                this.props.add()
                                                            }}
                                                        >
                                                            <i class="material-icons">add</i>
                                                        </button>
                                                    </> : <>
                                                        <button
                                                            class="btn btn-round"
                                                            data-toggle="modal"
                                                            data-target="#project-add-modal"
                                                            style={{ padding: 0 }}
                                                            onClick={() => {
                                                                this.props.add()
                                                            }}
                                                        >
                                                            <i class="material-icons">add</i>
                                                        </button>
                                                        <ExcelFile
                                                            element={<button
                                                                class="btn btn-round"
                                                                data-toggle="modal"
                                                                data-target="#project-add-modal"
                                                                style={{ padding: 0, marginLeft: 10 }}
                                                            >
                                                                <i class="material-icons">download</i>
                                                            </button>}
                                                            filename={"Rekap_" + now_date}
                                                        >
                                                            <ExcelSheet
                                                                data={this.props.item.sort(function (a, b) {
                                                                    if (a.nama < b.nama) { return -1; }
                                                                    if (a.nama > b.nama) { return 1; }
                                                                    return 0;
                                                                }).map((val, i) => {
                                                                    val.no = i + 1;
                                                                    val.harga_jual = parseInt(val.harga) + parseInt(val.keuntungan);
                                                                    return val;
                                                                })}
                                                                name={"Rekap"}
                                                            >
                                                                <ExcelColumn label="No" value="no" />
                                                                <ExcelColumn label="Nama Item" value="nama" />
                                                                <ExcelColumn label="Harga Asli" value="harga" />
                                                                <ExcelColumn label="Keuntungan" value="keuntungan" />
                                                                <ExcelColumn label="Harga Jual" value="harga_jual" />
                                                            </ExcelSheet>
                                                        </ExcelFile>
                                                    </>}
                                                </div>
                                                <form class="col-md-auto">
                                                    <div class="input-group input-group-round">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">
                                                                <i class="material-icons">search</i>
                                                            </span>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="Cari..."
                                                            aria-label="Cari..."
                                                            onChange={e => {
                                                                this.props.search(e.target.value)
                                                            }}
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                            {/* <!--end of content list head--> */}
                                            <div class="content-list-body row filter-list-1633571277024">
                                                {this.props.children}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
