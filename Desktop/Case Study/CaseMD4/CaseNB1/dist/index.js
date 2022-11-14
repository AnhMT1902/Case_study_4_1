"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_router_1 = require("./src/router/product-router");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use((0, express_fileupload_1.default)({
    createParentPath: true
}));
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use('/products', product_router_1.routerProduct);
app.listen(3000, () => {
    console.log('server running localhost 3000');
});
//# sourceMappingURL=index.js.map