import axios from "axios";
import { config } from "../../config";

const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});

/**
 * 
 * @param {String} url path alamat tujuan
 * @param {Object} result hasil yang diterima dari server
 * @param {String} error_message ketika ada error
 * @param {Blank} onFinal ketika apapun itu sudah selesai semua
 * @param {Boolean} debug untuk melihat log
 */
function getRequest(url, result, error_message, onFinal = false, debug = false) {
  axios.get(config.url_backend + url, {
    httpsAgent: agent,
  })
    .then(response => {
      return JSON.parse(response.request.responseText);
    })
    .then(hasil => {
      if (debug) {
        console.log(url, hasil);
      }
      if (hasil.success) {
        result(hasil);
      } else {
        console.log(hasil.message);
        if (error_message) {
          error_message(hasil.message);
        }
      }
    })
    .catch(error => {
      if (error.message === "Network Error") {
        if (error_message) {
          error_message(error.message, error);
        }
      }
    })
    .finally(() => {
      if (onFinal) {
        onFinal();
      }
    });
}

/**
 * 
 * @param {String} url path alamat tujuan
 * @param {Object} data_object data yang ingin dikirimkan
 * @param {Object} result hasil yang diterima dari server
 * @param {String} error_message ketika ada error
 * @param {Blank} onFinal ketika apapun itu sudah selesai semua
 * @param {Boolean} debug untuk melihat log
 */
function postRequest(url, data_object, result, error_message = false, onFinal = false, debug = false) {
  const keys = Object.keys(data_object);
  const values = Object.values(data_object);

  // collect data
  const data = new FormData();
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = values[i];
    data.append(key, value);
  }

  axios.post(config.url_backend + url, data, {
    httpsAgent: agent,
    headers: {
      'Content-Type': 'multipart/form-data',
      // 'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return JSON.parse(response.request.responseText);
    })
    .then(hasil => {
      if (debug) {
        console.log(url, hasil);
      }
      if (hasil.success) {
        result(hasil);
      } else {
        console.log(hasil.message);
        if (error_message) {
          error_message(hasil.message);
        }
      }
    })
    .catch(error => {
      if (error.message === "Network Error") {
        if (error_message) {
          error_message(error.message, error);
        }
      }
    })
    .finally(() => {
      if (onFinal) {
        onFinal();
      }
    });
}

export {
  getRequest,
  postRequest,
}