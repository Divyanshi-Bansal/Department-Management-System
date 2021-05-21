"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controllers_1 = require("../controllers/index_controllers");
const router = express_1.Router();
router.get('/', index_controllers_1.get_home);
router.get('/employees', index_controllers_1.get_employees);
router.get('/employees/:id', index_controllers_1.get_employeesByID);
router.put('/put/:id', index_controllers_1.put_employees);
router.post('/post', index_controllers_1.post_employees);
router.delete('/delete/:id', index_controllers_1.delete_employees);
router.get('*', index_controllers_1.errorPage);
exports.default = router;
//# sourceMappingURL=index_routes.js.map