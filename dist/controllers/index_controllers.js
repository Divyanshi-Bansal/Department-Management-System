"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_employeesByID = exports.errorPage = exports.delete_employees = exports.post_employees = exports.put_employees = exports.get_home = exports.get_employees = void 0;
const database_1 = require("../database");
const get_employees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM empdept ORDER BY empid");
        return res.status(200).json({
            entries: response.rows,
            time: new Date(),
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            error: "Internal Server error",
            time: new Date(),
        });
    }
});
exports.get_employees = get_employees;
const get_home = (req, res, next) => {
    try {
        return res.status(200).json({
            message: "Welcome to Employee's Management Departemnt",
        });
    }
    catch (_a) {
        return res.status(404).json({
            error: "Page can't found",
        });
    }
};
exports.get_home = get_home;
const put_employees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { experience } = req.body;
    try {
        const response = yield database_1.pool.query("UPDATE empdept SET empexperience = $1 WHERE empid = $2", [experience, id]);
        return res.status(200).json({
            message: "Successfully updated",
            body: {
                updatedemp: { experience, id }
            },
            time: new Date(),
        });
    }
    catch (_a) {
        return res.status(404).json({
            error: "Page can't update",
            time: new Date(),
        });
    }
});
exports.put_employees = put_employees;
const post_employees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { empname, empage, empdepartment, empexperience, empsalary } = req.body;
    const response = yield database_1.pool.query("SELECT * FROM empdept");
    const id = response.rows.length + 1;
    try {
        const response = yield database_1.pool.query('INSERT INTO  empdept(empid ,  empname, empage, empdepartment, empexperience, empsalary) values ($1 , $2 , $3 , $4 , $5 , $6)', [id, empname, empage, empdepartment, empexperience, empsalary]);
        return res.status(200).json({
            message: "Successfully added your record",
            body: {
                newEmployee: { id, empname, empage, empdepartment, empexperience, empsalary }
            },
            time: new Date(),
        });
    }
    catch (_b) {
        return res.status(404).json({
            error: "Invalid value, can't add",
            time: new Date(),
        });
    }
});
exports.post_employees = post_employees;
const delete_employees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        yield database_1.pool.query('DELETE FROM empdept WHERE empid = $1', [id]);
        return res.status(200).json({
            message: "Successfully delete",
            body: {
                deletedemp: {
                    id
                }
            },
            time: new Date(),
        });
    }
    catch (_c) {
        return res.status(500).json({
            error: "Employee not Found",
            time: new Date(),
        });
    }
});
exports.delete_employees = delete_employees;
const errorPage = (req, res, next) => {
    return res.status(404).json({
        error: "Some error got found ",
        time: new Date(),
    });
};
exports.errorPage = errorPage;
const get_employeesByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const response = yield database_1.pool.query("SELECT * FROM empdept WHERE empid = $1", [id]);
        return res.status(200).json({
            entries: response.rows,
            time: new Date(),
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            error: "Internal Server error",
            time: new Date(),
        });
    }
});
exports.get_employeesByID = get_employeesByID;
//# sourceMappingURL=index_controllers.js.map