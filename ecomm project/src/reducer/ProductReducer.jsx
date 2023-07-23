

const ProductReducer = (state, action) => {
    switch(action.type){
        case "LOADING":
            return {
                ...state, isLoading : true
            }
        case "ERROR":
            return {
                ...state, isError : true, isLoading : false 
            }
        case "ADD":
            // eslint-disable-next-line no-case-declarations
            const featuredProduct = action.payload.data.filter((product) => {
                //console.log(`product featured : ${product.featured}`)
                return product.featured === "true";
            });

            return {
                ...state, isLoading : false, products: action.payload.data, featuredProducts : featuredProduct
            }
        case "A_PRODUCT_LOADING":
            return {
                ...state, isAProductLoading : true
            }
        case "A_PRODUCT_ERROR":
            return {
                ...state, isAProductLoading : false, isError : true
            }
        case "ADD_A_PRODUCT":
            return {
                ...state, isAProductLoading : false, aproduct : action.payload.data
            }
    }
    return state;
}

export default ProductReducer;