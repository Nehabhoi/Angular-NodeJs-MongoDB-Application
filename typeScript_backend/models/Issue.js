"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var IssueSchema = new mongoose_1.Schema({
    title: { type: String, required: true, unique: true },
    responsible: { type: String },
    description: { type: String, required: true },
    severity: { type: String },
    status: { String: String }
});
// Export the model and return your IUser interface
exports["default"] = mongoose.model('Issue', IssueSchema);
