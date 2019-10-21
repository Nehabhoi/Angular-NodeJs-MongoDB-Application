"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var port = process.env.PORT || 4000;
App_1["default"].listen(port, function (err) {
    if (err) {
        return console.log(err);
    }
    return console.log("server is listening on " + port);
});
