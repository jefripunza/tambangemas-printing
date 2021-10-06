const production = String(process.env.NODE_ENV).includes("production") ? true : false;

const config = {
    url_backend: production ? "" : "http://localhost:5000",
}

export {
    config,
    production,
}