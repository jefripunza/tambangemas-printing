const path = require("path");
const { public, json, errorJson } = require("../utils/response")
const { config } = require("../../config");

const {
    databaseItem,
} = require("../models");

// ===============================================

exports.index = (req, res, next) => {
    return public(res, path.join(config.path_public, "index.html"))
}

// ===============================================

exports.api_get = (req, res, next) => {
    const {
        request,
    } = req.params;
    if (request === "refresh-item") {
        return json(res, "seger!!", databaseItem.read())
    } else {
        return errorJson(res, "api tidak ada...")
    }
}

exports.api_post = (req, res, next) => {
    const {
        request,
    } = req.params;
    const {
        _id,
        nama,
        harga,
        keuntungan,
    } = req.body;
    console.log({ body: req.body });
    if (request === "insert-item") {
        databaseItem.add({
            nama,
            harga: parseInt(harga),
            keuntungan: parseInt(keuntungan),
        }, result => {
            return json(res, "berhasil menambahkan item !!", result)
        });
    } else if (request === "update-item") {
        databaseItem.update(_id, {
            nama,
            harga: parseInt(harga),
            keuntungan: parseInt(keuntungan),
        }, result => {
            return json(res, "berhasil mengubah item !!", result)
        });
    } else if (request === "delete-item") {
        databaseItem.delete(_id, result => {
            return json(res, "berhasil menghapus item !!", result)
        });
    } else {
        return errorJson(res, "request tidak ada...")
    }
}