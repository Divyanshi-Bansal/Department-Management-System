"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index_routes"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = express_1.default();
// app.use(morgan("tiny"));
app.use(express_1.default.static("public"));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(morgan_1.default("dev"));
// app.use(morgan('combined', { "stream": logger.stream }));
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
    },
}));
app.use(index_routes_1.default);
app.listen(3001, () => {
    console.log("Server is running on Port");
});
//# sourceMappingURL=app.js.map