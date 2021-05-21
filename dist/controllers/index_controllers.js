"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorPage = exports.delete_employees = exports.post_employees = exports.put_employees = exports.get_home = exports.get_employees = void 0;
const get_employees = (req, res, next) => {
    try {
        return res.status(200).json({
            message: "Divyanshi Bansal",
            time: new Date()
        });
    }
    catch (_a) {
        return res.status(404).json({
            message: "Page can't found",
            time: new Date()
        });
    }
};
exports.get_employees = get_employees;
const get_home = (req, res, next) => {
    try {
        return res.status(200).json({
            message: "Welcome to Employee's Management Departemnt"
        });
    }
    catch (_a) {
        return res.status(404).json({
            error: "Page can't found",
        });
    }
};
exports.get_home = get_home;
const put_employees = (req, res, next) => {
    try {
        return res.status(200).json({
            message: "Successfully updated",
            time: new Date()
        });
    }
    catch (_a) {
        return res.status(404).json({
            error: "Page can't update",
            time: new Date()
        });
    }
};
exports.put_employees = put_employees;
const post_employees = (req, res, next) => {
    try {
        return res.status(200).json({
            message: "Successfully post",
            time: new Date()
        });
    }
    catch (_a) {
        return res.status(404).json({
            error: "Page can't post",
            time: new Date()
        });
    }
};
exports.post_employees = post_employees;
const delete_employees = (req, res, next) => {
    try {
        return res.status(200).json({
            message: "Successfully delete",
            time: new Date()
        });
    }
    catch (_a) {
        return res.status(404).json({
            error: "Page can't delete",
            time: new Date()
        });
    }
};
exports.delete_employees = delete_employees;
const errorPage = (req, res, next) => {
    return res.status(404).json({
        error: "Some error got found ",
        time: new Date()
    });
};
exports.errorPage = errorPage;
//# sourceMappingURL=index_controllers.js.map