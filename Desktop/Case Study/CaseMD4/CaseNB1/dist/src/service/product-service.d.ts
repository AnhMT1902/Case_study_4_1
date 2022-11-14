import { Request, Response } from "express";
export declare class ProductService {
    private productRepository;
    private imageRepository;
    constructor();
    findByID: (req: Request, res: Response, id: any) => Promise<any>;
    find: (req: Request, res: Response) => Promise<any>;
    findAll: (req: Request, res: Response) => Promise<any>;
    saveProduct: (req: Request, res: Response) => Promise<void>;
    findIdMax: (req: Request, res: Response) => Promise<any>;
    deleteByID: (req: Request, res: Response, id: number) => Promise<void>;
    editByID: (req: Request, res: Response, id: number) => Promise<void>;
    findProductByKey: (req: Request, res: Response, key: string) => Promise<any>;
}
declare const _default: ProductService;
export default _default;
