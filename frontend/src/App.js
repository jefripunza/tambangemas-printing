import React, { Component } from 'react';

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
  modalLoading,
} from "./utils/SweetAlert";

import {
  ModalAddItem,
  ModalUpdateItem,
  ModalViewItem,
} from "./modals";

// https://pipeline.mediumra.re/nav-side-team.html

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
      console.log({ hasil });
      this.setState({
        item: hasil.data,
        view: hasil.data,
        isLoaded: true,
      })
    })
  }

  componentDidMount() {
    this.refreshData();

    // handle anchor button
    document.addEventListener('click', function (event) {
      event.preventDefault();                     // Don't navigate!
      const anchor = event.target.closest("a");   // Find closest Anchor (or self)
      if (!anchor) return;                        // Not found. Exit here.
      const href = anchor.getAttribute('href');
      const target = anchor.getAttribute('target');
      if (String(href).startsWith("#")) {
        const id = String(href).replaceAll("#", "");
        if (document.getElementById(id)) {
          document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
          });
        }
      } else if (target === "_blank") {
        window.open(href, '_blank').focus();
      }
    });
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
    modalLoading("sedang menghapus...")
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
        <Container
          item={item}
          add={() => {
            this.modalInsert();
          }}
          search={value => {
            if (String(value).length > 0) {
              this.setState({
                view: item.filter(v => {
                  return String(v.nama).toLowerCase().includes(String(value).toLowerCase())
                }),
              })
            } else {
              this.setState({
                view: item,
              })
            }
          }}
        >
          <div className="row">
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
        </Container>
      );
    }
  }
}

export default App;