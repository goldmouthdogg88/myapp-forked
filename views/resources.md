# Error Message

query: "path must be absolute or specify root to res.sendFile",
browser: "chrome"

https://stackoverflow.com/questions/26079611/node-js-typeerror-path-must-be-absolute-or-specify-root-to-res-sendfile-failed


app.get('/api', (req, res, next) => {
    res.sendFile('./public/index.html', { root: __dirname });
});