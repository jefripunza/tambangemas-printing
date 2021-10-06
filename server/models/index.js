const path = require("path");
const { Database } = require("./advance-json-database");

const databaseItem = new Database(path.join(__dirname, "database", "item.json"), [{
    nama: "pensil",
    harga: 1500,
    keuntungan: 300,
}], true);

module.exports = {
    databaseItem,
};