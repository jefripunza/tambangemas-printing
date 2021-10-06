import React, { Component } from 'react';

import Loading from "../components/Animates/Loading";

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama_item: null,
            harga: null,
            keuntungan: null,
            //
            loading: false,
        }
    }
    render() {
        const {
            nama_item,
            harga,
            keuntungan,
            //
            loading,
        } = this.state;
        if (loading) {
            return <Loading
                size={50}
                fontSize={20}
                message={"Request..."}
            />
        } else {
            return (
                <>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Nama Item" value={nama_item} onChange={e => {
                            if (String(e.target.value).length > 0) {
                                this.setState({
                                    nama_item: e.target.value,
                                });
                            } else {
                                this.setState({
                                    nama_item: null,
                                });
                            }
                        }} />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Harga" value={harga} onChange={e => {
                            // eslint-disable-next-line
                            e.target.value = e.target.value.replace(/[^0-9\.]+/g, '');
                            if (String(e.target.value).length > 0) {
                                this.setState({
                                    harga: parseInt(e.target.value),
                                });
                            } else {
                                this.setState({
                                    harga: null,
                                });
                            }
                        }} />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Keuntungan" value={keuntungan} onChange={e => {
                            // eslint-disable-next-line
                            e.target.value = e.target.value.replace(/[^0-9\.]+/g, '');
                            if (String(e.target.value).length > 0) {
                                this.setState({
                                    keuntungan: parseInt(e.target.value),
                                });
                            } else {
                                this.setState({
                                    keuntungan: null,
                                });
                            }
                        }} />
                    </div>
                    {(nama_item && String(nama_item).length > 0) && (harga && String(harga).length > 0) && (keuntungan && String(keuntungan).length > 0) ? <>
                        <button class="btn btn-success" onClick={() => {
                            this.setState({
                                loading: true,
                            });
                            setTimeout(() => {
                                this.props.onSubmit({
                                    nama: nama_item,
                                    harga,
                                    keuntungan,
                                });
                            }, 400);
                        }}>Submit</button>
                    </> : null}
                </>
            )
        }
    }
}
