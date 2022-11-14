"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
const data_source_1 = require("../data-source");
const image_1 = require("../model/image");
class ImageService {
    constructor() {
        this.findByIdProduct = async (req, res) => {
            let id = +req.params.id;
            return await this.imageRepository.find({
                where: {
                    id_product: id
                }
            });
        };
        this.saveImage = async (img) => {
            await this.imageRepository.save(img);
        };
        this.deleteImage = async (id) => {
            let sqlImage = `delete
                        from image
                        where id_product = ${id}`;
            return await this.imageRepository.query(sqlImage);
        };
        data_source_1.AppDataSource.initialize().then((connection) => {
            console.log('connect DBimg success');
            this.imageRepository = data_source_1.AppDataSource.getRepository(image_1.Image);
        });
    }
}
exports.ImageService = ImageService;
exports.default = new ImageService();
//# sourceMappingURL=species-service.js.map