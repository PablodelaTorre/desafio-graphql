import ProductsController from '../controllers/products.js'

const productsController = new ProductsController()

export const resolvers = {
    Query: {
        getAllProducts: () => {
            return productsController.getAll()
        },
    },
    Mutation: {
        //(roots,arguments)
        addProduct: async(_,{input})=>{
            return productsController.createProduct(input)
        }
    }
}