"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index_routes"));
const morgan_1 = __importDefault(require("morgan"));
const winston_1 = __importDefault(require("./config/winston"));
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(morgan_1.default("dev"));
app.use(index_routes_1.default);
app.use(function (err, req, res, next) {
    winston_1.default.info(`${req.method} - ${req.originalUrl}`);
    // logger.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`);
    // next(response)
});
app.listen(3001, () => {
    console.log("Server is running on Port");
});
//# sourceMappingURL=app.js.map