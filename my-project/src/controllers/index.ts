class IndexController {
    public getIndex(req: Request, res: Response): void {
        res.send('Welcome to the Index Route!');
    }
}

export default IndexController;