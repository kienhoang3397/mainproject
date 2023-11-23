import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState:{
        product:{
            allProduct: [],
            isFetching: false,
            error: false
        },
        addProduct:{
            succsess: false,
             isFetching: false,
             error: false
         },
         deleteProduct:{
             isFetching: false,
             error: false
         },
        updateProduct:{
            currentProduct: null,
        }
    },
    reducers:{
        getProductStart:(state)=>{
            state.product.isFetching = true
        },
        getProductSuccess:(state, action)=>{
            state.product.isFetching = false
            state.product.allProduct = action.payload
        },
        getProductError:(state)=>{
            state.product.isFetching = false
            state.product.error = true
        },
        addProductStart : (state) =>{
            state.addProduct.isFetching = true;
        },
        addProductSuccsess: (state, action)=>{
            state.addProduct.isFetching = false;
            state.addProduct.succsess = true
            state.addProduct.error = false
        },
        addProductFailed: (state) =>{
            state.addProduct.isFetching = false;
            state.addProduct.error = true
            state.addProduct.succsess = false
        },
        deleteProductStart : (state) =>{
            state.deleteProduct.isFetching = true;
        },
        deleteProductSuccsess: (state, action)=>{
            state.deleteProduct.isFetching = false;
            state.deleteProduct.succsess = true
            state.deleteProduct.error = false
        },
        deleteProductFailed: (state) =>{
            state.deleteProduct.isFetching = false;
            state.deleteProduct.error = true
            state.deleteProduct.succsess = false
        },
        updateProductStart: (state) =>{
            state.updateProduct.isFetching = true;
        },
        updateProductSuccsess: (state, action)=>{
            state.updateProduct.isFetching = false;
            state.updateProduct.succsess = true
            state.updateProduct.error = false
        },
        updateProductFailed: (state) =>{
            state.updateProduct.isFetching = false;
            state.updateProduct.error = true
            state.updateProduct.succsess = false
        },
        
    }
});

export const {
    getProductError,
    getProductStart,
    getProductSuccess,
    addProductStart,
    addProductSuccsess,
    addProductFailed,
    deleteProductFailed,
    deleteProductSuccsess,
    deleteProductStart,
    updateProductStart,
    updateProductSuccsess,
    updateProductFailed,
    updateProduct
} = productSlice.actions;

export default productSlice.reducer;
