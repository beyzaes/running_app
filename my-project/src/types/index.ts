export interface Request {
    body?: any;
    params?: { [key: string]: string };
    query?: { [key: string]: string };
}

export interface Response {
    status(code: number): this;
    json(data: any): this;
    send(data: any): this;
}