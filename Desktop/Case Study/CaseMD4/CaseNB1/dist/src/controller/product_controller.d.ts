import { Request, Response } from "express";
export declare class ProductController {
    private productService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    showFormCreat: (req: Request, res: Response) => Promise<void>;
    createProduct: (req: Request, res: Response) => Promise<void>;
    showFormManage: (req: Request, res: Response) => Promise<void>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
    showFormEdit: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    showProductDetail: (req: Request, res: Response) => Promise<void>;
    searchProduct: (req: Request, res: Response) => Promise<void>;
    showProductByKey: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
