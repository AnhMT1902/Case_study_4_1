"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerProduct = void 0;
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controller/product_controller"));
exports.routerProduct = (0, express_1.Router)();
exports.routerProduct.get('/', product_controller_1.default.getAll);
exports.routerProduct.get('/creat', product_controller_1.default.showFormCreat);
exports.routerProduct.post('/creat', product_controller_1.default.createProduct);
exports.routerProduct.get('/manage', product_controller_1.default.showFormManage);
exports.routerProduct.post('/delete/:id', product_controller_1.default.deleteProduct);
exports.routerProduct.get('/:id', product_controller_1.default.showProductDetail);
exports.routerProduct.get('/edit/:id', product_controller_1.default.showFormEdit);
exports.routerProduct.post('/edit/:id', product_controller_1.default.editProduct);
exports.routerProduct.post('/search', product_controller_1.default.searchProduct);
exports.routerProduct.get('/search/:key', product_controller_1.default.showProductByKey);
//# sourceMappingURL=product-router.js.map