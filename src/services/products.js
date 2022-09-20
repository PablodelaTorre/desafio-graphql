import ProductsDAO from '../persistencia/dao/productsDao.js'

export default class ProductService {
    constructor(){
        this.productDao = new ProductsDAO()
    }
    async getAll(){
        return this.productDao.findAllProducts()
    }
    async createProduct(prod){
        return this.productDao.createOneProduct(prod)
    }

}