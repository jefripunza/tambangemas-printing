import React, { Component } from 'react';

import { formatRupiah } from "../helper/indo";

export default class ViewItem extends Component {
    render() {
        const {
            harga,
            keuntungan,
        } = this.props;
        return (
            <>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <td style={{ textAlign: "left" }}>Harga Asli</td>
                            <td>{formatRupiah(harga, "Rp.")}</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "left" }}>Keuntungan</td>
                            <td>{formatRupiah(keuntungan, "Rp.")}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}
