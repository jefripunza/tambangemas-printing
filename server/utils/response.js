const public = (res, path) => {
    return res.sendFile(path);
}

const json = (res, message, data) => {
    return res
        .status(200)
        .json({
            success: true,
            message,
            data,
        });
};

const errorJson = (res, message, status = 500) => {
    return res
        .status(status)
        .json({
            success: false,
            message,
        });
};

module.exports = {
    public,
    //
    json,
    errorJson,
}