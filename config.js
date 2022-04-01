const env = process.env.NODE_ENV;
const path = require("path");

const config = {
    // Application init
    app_name: "tambangemasprinting.com",
    separate: " | ",

    path_public: path.join(__dirname, "frontend", "build"),

    mongodb: {
        database: "raju",
        connection: "mongodb+srv://",
    },

    // system access
    environment: env ? env : "development",
    production: String(env).includes("production") ? true : false,
}

module.exports = {
    config,
}
