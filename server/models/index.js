const { config } = require("../../config");
const { insertDocument, showCollection, deleteDocument, updateDocumentByObject, updateDocumentByID } = require("./ModelMongoDB");

/**
 * 
 * @returns 
 */
async function readItem() {
    return (await showCollection(config.mongodb.database, ["item"])).item
}

/**
 * 
 * @param {{nama:string, harga:number, keuntungan:number}} item 
 * @returns 
 */
async function tambahItem(item) {
    return await insertDocument(config.mongodb.database, "item", {
        ...item,
    })
}

/**
 * 
 * @param {string} _id 
 * @param {{nama:string, harga:number, keuntungan:number}} item 
 * @returns 
 */
async function updateItem(_id, item) {
    return await updateDocumentByID(config.mongodb.database, "item", _id, {
        ...item,
    })
}

/**
 * 
 * @param {string} _id 
 * @returns 
 */
async function deleteItem(_id) {
    return await deleteDocument(config.mongodb.database, "item", _id)
}

module.exports = {
    readItem,
    tambahItem,
    updateItem,
    deleteItem,
}