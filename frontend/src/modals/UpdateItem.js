import React, { Component } from 'react';

import Loading from "../components/Animates/Loading";

export default class UpdateItem extends Component {
    constructor(props) {
        super(props);
        //
        const {
            nama,
            harga,
            keuntungan,
        } = this.props;
        //
        this.state = {
            nama_item: nama,
            harga,
            keuntungan,
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
                        <label for="input-nama-item" class="form-label">Nama Item</label>
                        <input type="text" class="form-control" id="input-nama-item" placeholder="Ketik..." value={nama_item} onChange={e => {
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
                        <label for="input-harga" class="form-label">Harga</label>
                        <input type="text" class="form-control" id="input-harga" placeholder="Ketik..." value={harga} onChange={e => {
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
                        <label for="input-keuntungan" class="form-label">Keuntungan</label>
                        <input type="text" class="form-control" id="input-keuntungan" placeholder="Ketik..." value={keuntungan} onChange={e => {
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
                    {(nama_item && String(nama_item).length > 0 && nama_item !== this.props.nama)
                        || (harga && String(harga).length > 0 && parseInt(harga) !== this.props.harga)
                        || (keuntungan && String(keuntungan).length > 0 && parseInt(keuntungan) !== this.props.keuntungan) ? <>
                        <button class="btn btn-success" onClick={() => {
                            this.setState({
                                loading: true,
                            });
                            setTimeout(() => {
                                this.props.onSubmit({
                                    _id: this.props._id,
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
