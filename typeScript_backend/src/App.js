"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Issue_1 = require("../models/Issue");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.configure();
        this.connectDB();
    }
    App.prototype.mountRoutes = function () {
        var router = express.Router();
        // router.get('/', (req, res) => {
        //     res.json({
        //         message: 'Hello World!'
        //     })
        // })
        router.route('/issues').get(function (req, res) {
            Issue_1["default"].find(function (err, issues) {
                if (err)
                    console.log(err);
                else
                    res.json(issues);
            });
        });
        router.route('/issues/:id').get(function (req, res) {
            Issue_1["default"].findById(req.params.id, function (err, issue) {
                if (err)
                    console.log(err);
                else
                    res.json(issue);
            });
        });
        router.route('/issues/add').post(function (req, res) {
            var issue = new Issue_1["default"](req.body);
            issue.save()
                .then(function (issue) {
                res.status(200).json({ 'issue': 'Added successfully' });
            })["catch"](function (err) {
                res.status(400).send('Failed to create new record');
            });
        });
        router.route('/issues/update/:id').post(function (req, res) {
            Issue_1["default"].findById(req.params.id, function (err, issue) {
                if (!issue)
                    return new Error('Could not load Document');
                else {
                    issue.title = req.body.title;
                    issue.responsible = req.body.responsible;
                    issue.description = req.body.description;
                    issue.severity = req.body.severity;
                    issue.status = req.body.status;
                    issue.save().then(function (issue) {
                        res.json('Update done');
                    })["catch"](function (err) {
                        res.status(400).send('Update failed');
                    });
                }
            });
        });
        router.route('/issues/delete/:id').get(function (req, res) {
            Issue_1["default"].findByIdAndRemove({ _id: req.params.id }, function (err, issue) {
                if (err)
                    res.json(err);
                else
                    res.json('Removed successfully');
            });
        });
        this.express.use('/', router);
    };
    App.prototype.connectDB = function () {
        mongoose.connect('mongodb://localhost:27017/issues', { useNewUrlParser: true });
        var connection = mongoose.connection;
        connection.once('open', function () {
            console.log('MongoDB database connection established successfully!');
        });
    };
    App.prototype.configure = function () {
        this.mountRoutes();
        var options = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: '*',
            preflightContinue: false
        };
        this.express.use(cors(options));
        this.express.use(bodyParser.json());
    };
    return App;
}());
exports["default"] = new App().express;
