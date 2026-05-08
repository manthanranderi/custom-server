const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8000;

const requestHandler = (req, res) => {
  let fileName = "";

  switch (req.url) {
    
    case "/":
      fileName = "./pages/index.html";
      break;

    case "/about":
      fileName = "./pages/about.html";
      break;

    case "/service":
      fileName = "./pages/service.html";
      break;

    case "/contact":
      fileName = "./pages/contact.html";
      break;

    default:
      fileName = "./pages/404-page.html";
      break;
  }

  fs.readFile(path.join(__dirname, fileName), (err, data) => {
    if (err) {
      res.end("INternal Server Error");
      return;
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.log(err);
    return false;
  } else {
    console.log(`server start on port ${port}`);
    console.log("http://localhost:8000/");
  }
});
