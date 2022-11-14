import { Request, Response } from "express";
export declare class ImageService {
    private imageRepository;
    constructor();
    findByIdProduct: (req: Request, res: Response) => Promise<any>;
    saveImage: (img: any) => Promise<void>;
    deleteImage: (id: any) => Promise<any>;
}
declare const _default: ImageService;
export default _default;
