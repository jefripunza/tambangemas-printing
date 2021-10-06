import React, { Component } from 'react';
import { formatRupiah } from "../../helper/indo";

export default class Info extends Component {
    render() {
        const {
            harga,
            keuntungan,
        } = this.props;
        return (
            <>
                <div className="row">
                    <div className="col-12">
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}>
                            <p className="text-danger" onClick={() => {
                                this.props.onClick();
                            }}>{formatRupiah(harga, "Rp.")}</p>
                            <i class="bi bi-arrow-right"></i>
                            <p className="text-success" onClick={() => {
                                this.props.onClick();
                            }}>{formatRupiah(harga + keuntungan, "Rp.")}</p>
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <a href="!#" className="btn btn-secondary" onClick={() => {
                            this.props.onUpdate();
                        }} >Edit</a>
                    </div>
                    <div className="col-6 text-center">
                        <a href="!#" className="btn btn-danger" onClick={() => {
                            this.props.onDelete();
                        }} >Hapus</a>
                    </div>
                </div>
            </>
        )
    }
}
