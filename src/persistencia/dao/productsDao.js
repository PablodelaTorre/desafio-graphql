import productsModel from '../models/Products.js'

export default class ProductsDAO {
    async findAllProducts(){
        const products = await productsModel.find()
        return products
    }
    async createOneProduct(prod){
        const product = new productsModel(prod)
        await product.save()
        return product
    }
}