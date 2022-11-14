"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("../service/product-service");
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await this.productService.findAll(req, res);
            res.render('index', {
                listProducts: products
            });
        };
        this.showFormCreat = async (req, res) => {
            res.render('crud/creat');
        };
        this.createProduct = async (req, res) => {
            await this.productService.saveProduct(req, res);
            res.redirect(301, '/products');
        };
        this.showFormManage = async (req, res) => {
            let products = await this.productService.find(req, res);
            res.render('crud/manageProduct', {
                listProducts: products
            });
        };
        this.deleteProduct = async (req, res) => {
            let id = +req.params.id;
            await this.productService.deleteByID(req, res, id);
            res.redirect(301, '/products/manage');
        };
        this.showFormEdit = async (req, res) => {
            let id = +req.params.id;
            let product = await this.productService.findByID(req, res, id);
            console.log(product)
            res.render('crud/edit', { products: product });
        };
        this.editProduct = async (req, res) => {
            let id = +req.params.id;
            await this.productService.editByID(req, res, id);
            res.redirect(301, '/products/manage');
        };
        this.showProductDetail = async (req, res) => {
            let id = +req.params.id;
            let product = await this.productService.findByID(req, res, id);
            console.log(product);
            res.render('product/info', { product: product });
        };
        this.searchProduct = async (req, res) => {
            let key = req.body.key;
            res.redirect(301, `/products/search/${key}`);
        };
        this.showProductByKey = async (req, res) => {
            let key = req.params.key;
            let products = await this.productService.findProductByKey(req, res, key);
            res.render('product/product', {
                listProductsSearch: products
            });
        };
        this.productService = new product_service_1.ProductService();
    }
}
exports.ProductController = ProductController;
exports.default = new ProductController();
//# sourceMappingURL=product_controller.js.map