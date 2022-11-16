interface ISneaker {
    name?: string;
    price?: number;
    color?: string;
    size?: number;
    quantity?: number;
    sale?: boolean;
    sold_out?: boolean;
    sold_quantity: number; // mặc định = 0
}