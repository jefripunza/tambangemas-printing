import React, { Component } from 'react';

import moment from "moment";
import 'moment/locale/id';

import {
  getRequest,
  postRequest,
} from "./utils/Axios";

import './assets/css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Container from "./components/Container";
import Card from "./components/Card";
import Info from "./components/Info";

import Loading from './components/Animates/Loading';

import {
  createDelete,
  createModal,
  createSuccess,
} from "./utils/SweetAlert";

import {
  ModalAddItem,
  ModalUpdateItem,
  ModalViewItem,
} from "./modals";

import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

moment.lang('id');
const now_date = moment.unix(parseInt((new Date()).getTime()) / 1000).format('YYYY-MM-DD_HH-m-s_dddd');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: false,
      item: [],
      view: [],
    }
  }

  refreshData() {
    getRequest("/api/refresh-item", hasil => {
      this.setState({
        item: hasil.data,
        view: hasil.data,
        isLoaded: true,
      })
    })
  }

  componentDidMount() {
    this.refreshData()
  }

  addItem(data) {
    postRequest("/api/insert-item", data, hasil => {
      this.refreshData()
      createSuccess(hasil.message);
    })
  }
  updateItem(data) {
    postRequest("/api/update-item", data, hasil => {
      this.refreshData()
      createSuccess(hasil.message);
    })
  }
  deleteItem(data) {
    const {
      _id,
    } = data;
    postRequest("/api/delete-item", { _id }, hasil => {
      this.refreshData()
      createSuccess(hasil.message);
    })
  }

  // =======================================================

  modalView(data) {
    const {
      nama,
    } = data;
    createModal(nama, <ModalViewItem {...data} />)
  }
  modalInsert() {
    createModal("Tambah Item", <ModalAddItem onSubmit={data => {
      this.addItem(data);
    }} />);
  }
  modalUpdate(data) {
    console.log({ data });
    createModal("Ubah Item", <ModalUpdateItem {...data} onSubmit={data => {
      this.updateItem(data);
    }} />)
  }
  modalDelete(data) {
    const {
      nama,
    } = data;
    createDelete(() => {
      this.deleteItem(data);
    }, <>
      apakah kamu yakin ingin menghapus data <b>{nama}</b> ??
    </>)
  }

  render() {
    const {
      isLoaded,
      error,
      item,
      view,
    } = this.state;
    if (error) {
      return error;
    } else if (!isLoaded) {
      return <div className="auto-center">
        <Loading
          size={50}
          fontSize={20}
          message={"Request..."}
        />
      </div>;
    } else {
      return (
        <Container>
          <div className="row">
            <div className="col-12">
              <div className="row">
                {item.length === 0 ? <>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4 text-center auto-center">
                    <a href="!#" className="btn btn-success" onClick={e => {
                      e.preventDefault();
                      this.modalInsert();
                    }} >Tambah</a>
                  </div>
                </> : <>
                  <div className="col-6 col-sm-6 col-md-6 col-lg-4 text-center auto-center">
                    <a href="!#" className="btn btn-success" onClick={e => {
                      e.preventDefault();
                      this.modalInsert();
                    }} >Tambah</a>
                  </div>
                  <div className="col-6 col-sm-6 col-md-6 col-lg-4 text-center">
                    <ExcelFile
                      element={<button href="!#" className="btn btn-secondary" >Download</button>}
                      filename={"Rekap_" + now_date}
                    >
                      <ExcelSheet
                        data={item.sort(function (a, b) {
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
                  </div>
                </>}
                <div className="col-sm-12 col-md-6 col-lg-4 text-center mt-4">
                  <div class="input-group">
                    <div class="input-group-text"><i class="bi bi-search"></i></div>
                    <input type="text" class="form-control" placeholder="Cari..." onChange={e => {
                      const value = e.target.value;
                      if (String(value).length > 0) {
                        this.setState({
                          view: item.filter(v => {
                            return String(v.nama).toLowerCase().includes(String(value).toLowerCase())
                          }),
                        })
                      }else{
                        this.setState({
                          view: item,
                        })
                      }
                    }} />
                  </div>
                </div>
              </div>
            </div>
            {view
              .sort(function (a, b) {
                if (a.nama < b.nama) { return -1; }
                if (a.nama > b.nama) { return 1; }
                return 0;
              })
              .map(data => {
                const {
                  nama,
                  harga,
                  keuntungan,
                } = data;
                return <Card
                  nama={nama}
                  onClick={() => {
                    this.modalView(data);
                  }}
                >
                  <Info
                    harga={harga}
                    keuntungan={keuntungan}
                    onClick={() => {
                      this.modalView(data);
                    }}
                    onUpdate={() => {
                      this.modalUpdate(data);
                    }}
                    onDelete={() => {
                      this.modalDelete(data);
                    }}
                  />
                </Card>;
              })}
          </div>
        </Container >
      );
    }
  }
}

export default App;