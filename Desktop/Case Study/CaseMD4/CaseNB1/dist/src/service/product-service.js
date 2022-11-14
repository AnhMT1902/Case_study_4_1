"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const data_source_1 = require("../data-source");
const product_1 = require("../model/product");
const image_service_1 = require("../service/image-service");
class ProductService {
    constructor() {
        this.findByID = async (req, res, id) => {
            let sql = `select * , s.id as id_species
                   from product
                            join image on product.id = id_product
                            join species s on product.species = s.id
                   where id_product = ${id}`;
            return await this.productRepository.query(sql);
        };
        this.find = async (req, res) => {
            let sql = `select product.id, name, price, species.species
                   from product
                            join species on product.species = species.id`;
            return await this.productRepository.query(sql);
        };
        this.findAll = async (req, res) => {
            let sql = `select product.id, name, price, species.species, image
                   from product
                            join image on product.id = id_product
                            join species on product.species = species.id
                   group by product.id`;
            return await this.productRepository.query(sql);
        };
        this.saveProduct = async (req, res) => {
            let files = req.files;
            if (files != null) {
                let product = req.body;
                if (product.name.length > 0 && product.price > 0 && product.age > 0 && product.color.length > 0 && product.description.length > 0) {
                    await this.productRepository.save(product);
                    let prd = await this.findIdMax(req, res);
                    let id = +prd[0].id;
                    let arrayImage = files.image;
                    console.log(arrayImage);
                    for (let index in arrayImage) {
                        let image = arrayImage[index];
                        await image.mv('./public/img/' + image.name);
                        let img = {
                            id_product: id,
                            image: `/img/${image.name}`
                        };
                        await this.imageRepository.saveImage(img);
                    }
                }
                else {
                    console.log('loi me r');
                }
            }
        };
        this.findIdMax = async (req, res) => {
            let sql = `select max(id) as id
                   from product`;
            return await this.productRepository.query(sql);
        };
        this.deleteByID = async (req, res, id) => {
            let sqlProduct = `delete
                          from product
                          where id = ${id}`;
            await this.productRepository.query(sqlProduct);
            await this.imageRepository.deleteImage(id);
        };
        this.editByID = async (req, res, id) => {
            let files = req.files;
            if (files !== null) {
                let product = req.body;
                let sqlProduct = `update product
                              set name        = '${product.name}',
                                  age         = ${+product.age},
                                  gender      = '${product.gender}',
                                  species     = ${+product.species},
                                  price       = ${+product.price},
                                  color       = '${product.color}',
                                  description =' ${product.description}'
                              where id = ${+id}`;
                if (product.name.length > 0 && product.price > 0 && product.age > 0 && product.color.length > 0 && product.description.length > 0) {
                    await this.productRepository.query(sqlProduct);
                    await this.imageRepository.deleteImage(id);
                    let arrayImage = files.image;
                    let lengthArr = arrayImage.length;
                    if (!lengthArr) {
                        let image = arrayImage;
                        await image.mv('./public/img/' + image.name);
                        let img = {
                            id_product: id,
                            image: `./img/${image.name}`
                        };
                        let sqlImage = `update image
                                    set image = '${img.image}'
                                    where id_product = ${+id}`;
                        await this.imageRepository.editImage(sqlImage);
                    }
                    else {
                        for (let index in arrayImage) {
                            console.log(index);
                            let image = arrayImage[index];
                            await image.mv('./public/img/' + image.name);
                            let img = {
                                id_product: id,
                                image: `/img/${image.name}`
                            };
                            let sqlImage = `update image
                                        set image = '${img.image}'
                                        where id_product = ${+id}`;
                            await this.imageRepository.editImage(sqlImage);
                        }
                    }
                }
                else {
                    console.log('loi me r');
                }
            }
        };
        this.findProductByKey = async (req, res, key) => {
            let sql = `select product.id, name, price, species.species, image
                   from product
                            join image on product.id = id_product
                            join species on product.species = species.id
                   where species.species = '${key}'
                      or name like '%${key}%'
                   group by product.id`;
            return await this.productRepository.query(sql);
        };
        data_source_1.AppDataSource.initialize().then((connection) => {
            console.log('connect DB success');
            this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
        });
        this.imageRepository = new image_service_1.ImageService();
    }
}
exports.ProductService = ProductService;
exports.default = new ProductService();
//# sourceMappingURL=product-service.js.map