import ProductsService from '../services/products.js';

export default class ProductsController {
    constructor(){
        this.productService = new ProductsService()
    }
    async getAll() {
        const allProducts = await this.productService.getAll()
        return allProducts
    }
    async createProduct(prod){
        const productCreated = await this.productService.createProduct(prod)
        return productCreated
    }
    async deleteProduct(id){
        const productDeleted = await this.productService.deleteProduct(id)
        return productDeleted
    }
}