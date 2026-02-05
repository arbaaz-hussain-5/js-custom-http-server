import http from "http";
import fs from 'fs/promises';
const host =  process.env.HOST;
const port = process.env.PORT;
let indexFile;
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    console.log(res);
    res.end(indexFile);
};

const server = http.createServer(requestListener);

fs.readFile("C:\\Users\\arbaa\\rproject\\hello_world\\http-server\\public\\html\\example1.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });


