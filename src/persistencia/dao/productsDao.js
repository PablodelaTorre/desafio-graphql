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
    async deleteOneProduct(id){
        const product = await productsModel.findByIdAndDelete(id)
        return product
    }
    async updateOneProduct(id,prod){
        const productUpdated = productsModel.findByIdAndUpdate(id,prod,{new:true})
        return productUpdated
    }
}