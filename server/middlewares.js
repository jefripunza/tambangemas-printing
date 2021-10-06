const app = global.app;
const { config } = require("../config");

// ===============================================

const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require('body-parser');
require("dotenv").config();

// ===============================================

app.use(helmet());
app.use(cors());
if (!config.production) {
    app.use(morgan("dev"));
}
app.use(bodyParser.json());
const formdataParser = require('multer')().fields([])
app.use(formdataParser)
app.use((req, res, next) => {
    res.set("Content-Security-Policy", "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")
    next()
});