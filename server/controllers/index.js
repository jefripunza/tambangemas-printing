const path = require("path");
const { public, json, errorJson } = require("../utils/response")
const { config } = require("../../config");

const {
    readItem, tambahItem, updateItem, deleteItem,
} = require("../models"); // databaseItem

// ===============================================

exports.index = (req, res, next) => {
    return public(res, path.join(config.path_public, "index.html"))
}

// ===============================================

exports.api_get = async (req, res, next) => {
    const {
        request,
    } = req.params;
    if (request === "refresh-item") {
        return json(res, "seger!!", await readItem())
    } else {
        return errorJson(res, "api tidak ada...")
    }
}

exports.api_post = async (req, res, next) => {
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
        if (await tambahItem({
            nama,
            harga: parseInt(harga),
            keuntungan: parseInt(keuntungan),
        })) {
            return json(res, "berhasil menambahkan item !!", await readItem())
        } else {
            return errorJson(res, "terjadi kesalahan pada database...")
        }
    } else if (request === "update-item") {
        if (await updateItem(_id, {
            nama,
            harga: parseInt(harga),
            keuntungan: parseInt(keuntungan),
        })) {
            return json(res, "berhasil mengubah item !!", await readItem())
        } else {
            return errorJson(res, "terjadi kesalahan pada database...")
        }
    } else if (request === "delete-item") {
        if (await deleteItem(_id)) {
            return json(res, "berhasil menghapus item !!", await readItem())
        } else {
            return errorJson(res, "terjadi kesalahan pada database...")
        }
    } else {
        return errorJson(res, "request tidak ada...")
    }
}