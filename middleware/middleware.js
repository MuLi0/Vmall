let express = require("express");
let app = express();

app.get("/xxx", function (req, res) {
  res.send({ a: 123 });
});

app.listen(8081, function () {
  console.log("8081,中间件已经执行");
});
